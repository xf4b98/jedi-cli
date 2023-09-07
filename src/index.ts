#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer'
import gradient from 'gradient-string';
import { createSpinner } from 'nanospinner'
import figlet from "figlet";

let player:string;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms))
const onWelcome = async () => chalk.bgBlue('Become a Jedi Master');

const getPlayerName = async () => {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'Name, what is yours, hmmm?',
    default() {
      return 'Padawan'
    }
  })

  player = answers.player_name as string;
}

const doQuestion1 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: "What is the Jedi Code's first line?",
    choices: [
      'There is no emotion, there is peace.',
      'There is no ignorance, there is knowledge.',
      'There is no chaos, there is harmony.'
    ]
  })
  return onAnswer(answers.question_1 === 'There is no emotion, there is peace.')
}

const doQuestion2 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: "Who trained Jedi Master Obi-Wan Kenobi?",
    choices: [
      'Yoda',
      'Qui-Gon Jinn',
      'Mace Windu'
    ]
  })
  return onAnswer(answers.question_2 === 'Qui-Gon Jinn')
}

const doQuestion3 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: "What is the Force power that allows Jedi to see events happening in other locations or times?",
    choices: [
      'Telekinesis',
      'Force lightning',
      'Force vision'
    ]
  })
  return onAnswer(answers.question_3 === 'Force vision')
}

const doQuestion4 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: "What lightsaber form is known for its strong defense and precise strikes?",
    choices: [
      'Form IV: Ataru',
      'Form II: Makashi',
      'Form III: Soresu'
    ]
  })
  return onAnswer(answers.question_4 === 'Form III: Soresu')
}

const doQuestion5 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message: "Name one of the three components of the Jedi Trials.",
    choices: [
      'Trial of Skill',
      'Trial of Wealth',
      'Trial of Emotion',
    ]
  })
  return onAnswer(answers.question_5 === 'Trial of Skill')
}

const doQuestion6 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_6',
    type: 'list',
    message: "What is the name of the ancient Sith Lord who created the Rule of Two?",
    choices: [
      'Darth Revan',
      'Darth Plagueis',
      'Darth Bane',
    ]
  })
  return onAnswer(answers.question_6 === 'Darth Bane')
}

const doQuestion7 = async () => {
  const answers = await inquirer.prompt({
    name: 'question_7',
    type: 'list',
    message: "In the Star Wars galaxy, what crystal is typically used to construct a Jedi's lightsaber?",
    choices: [
      'Sith crystal',
      'Kyber crystal',
      'Durasteel crystal',
    ]
  })
  return onAnswer(answers.question_7 === 'Kyber crystal')
}


const onAnswer = async (isCorrect: boolean) => {
  const spinner = createSpinner('Answers, checking I am, hmmm.').start();
  await sleep();
  if (isCorrect) {
    spinner.success({ text: "Impressive, you are. Well done, hmmm." });
  } else {
    spinner.error({ text: 'Wrong, you are, young Padawan. Much to learn, you still have.' })
    process.exit(1);
  }
}

const onWinner = async () => {
  const msg = [`Impressive, you are ${player}!`, "A Jedi Master, you have become."].join('\n');

  figlet(msg, (err, data) => {
    console.log(gradient('green', 'blue').multiline(data))
  })
}

await onWelcome();
await getPlayerName();
await doQuestion1();
await doQuestion2();
await doQuestion3();
await doQuestion4();
await doQuestion5();
await doQuestion6();
await doQuestion7();
await onWinner();