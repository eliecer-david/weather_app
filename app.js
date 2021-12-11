const { mainMenu, pause } = require("./helpers/inquirer");

const main = async () => {
  let mainOption = 0;

  do {
    mainOption = await mainMenu();

    await pause();
  } while (mainOption !== 3)
}

main();
