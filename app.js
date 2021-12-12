require("dotenv").config();

const {
  mainMenu,
  pause,
  getInput,
  showCitiesChecklist
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
        const selectedId = await showCitiesChecklist(cities);

        if (! selectedId) {
          break;
        }
        const selectedCity = cities.find(city => city.id === selectedId);
        console.log(selectedCity);

        // get weather

        // show results
        break;
    }

    await pause();
  } while (mainOption !== 3)
}

main();
