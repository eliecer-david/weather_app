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
        const city = await getInput('City');
        const cities = await searchRepo.searchCities(city);
        console.log(cities);

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
