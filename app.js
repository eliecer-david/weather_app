const {
  mainMenu,
  pause,
  getInput
} = require("./helpers/inquirer");

const main = async () => {
  let mainOption = 0;

  do {
    mainOption = await mainMenu();

    switch (mainOption) {
      case 1:
        const keyword = await getInput('City');
        console.log(keyword);

        // search and show cities

        // select a city

        // get weather

        // show results
        break;
    }

    await pause();
  } while (mainOption !== 3)
}

main();
