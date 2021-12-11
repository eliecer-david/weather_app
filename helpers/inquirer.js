require('colors');

const inquirer = require('inquirer');

const mainMenu = async () => {
  console.clear();

  console.log('==================='.green);
  console.log('    Weather app'.green);
  console.log('==================='.green);

  const mainQuestion = {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      { value: 1, name: '1. Search a city' },
      { value: 2, name: '2. Show search history' },
      { value: 3, name: '3. Exit' },
    ]
  }

  const { option } = await inquirer.prompt([ mainQuestion ]);
  return option;
}

module.exports = {
  mainMenu
}
