const { mainMenu } = require("./helpers/inquirer");

const main = async () => {
  let mainOption = 0;

  do {
    mainOption = await mainMenu();
  } while (mainOption !== 3)
}

main();
