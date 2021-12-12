require("dotenv").config();

const {
  mainMenu,
  pause,
  getInput
} = require("./helpers/inquirer");
const SearchRepository = require("./repositories/search");

const main = async () => {
  let mainOption = 0;

  do {
    mainOption = await mainMenu();
    const searchRepo = new SearchRepository();

    switch (mainOption) {
      case 1:
        const keyword = await getInput('City');
        const results = await searchRepo.searchCity(keyword);

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
