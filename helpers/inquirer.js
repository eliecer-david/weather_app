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

const pause = async () => {
  console.log();

  const pauseQuestion = {
    type: 'input',
    name: 'enter',
    message: `Press ${ 'enter'.green } to continue ...`
  }

  const { enter } = await inquirer.prompt([ pauseQuestion ]);
  return enter;
}

const getInput = async (message) => {
  const inputQuestion = {
    type: 'input',
    name: 'input',
    message,
    validate(value) {
      return (value.length === 0) ?
        'Please, enter a value' :
        true;
    }
  }

  const { input } = await inquirer.prompt([ inputQuestion ]);
  return input;
}

const showCitiesChecklist = async (cities = []) => {
  const choices = cities.map((city, key) => {
    const index = key + 1;

    return {
      value: city.id,
      name: `${ index }. ${ city.name }`
    }
  });

  choices.unshift({
    value: 0,
    name: '0. Return back'
  });

  const question = {
    type: 'list',
    name: 'city',
    message: 'Select a city',
    choices
  }

  const { city } = await inquirer.prompt([ question ]);
  return city;
}

module.exports = {
  mainMenu,
  pause,
  getInput,
  showCitiesChecklist
}
