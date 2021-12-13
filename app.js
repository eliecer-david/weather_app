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
        searchRepo.addToHistory(selectedCity.name);

        const weatherData = await searchRepo.getWeather(selectedCity.latitude, selectedCity.longitude);

        console.clear()
        console.log('City information'.green);
        console.log('================'.green);
        console.log(`${ 'City:'.green } ${ selectedCity.name }`);
        console.log(`${ 'Latitude:'.green } ${ selectedCity.latitude }`);
        console.log(`${ 'Longitude:'.green } ${ selectedCity.longitude }`);
        console.log(`${ 'Temperature:'.green } ${ weatherData.temperature }`);
        console.log(`${ 'Min:'.green } ${ weatherData.temperatureMax }`);
        console.log(`${ 'Max:'.green } ${ weatherData.temperatureMin }`);
        console.log(`${ 'How is the weather?:'.green } ${ weatherData.description }`);

        if (weatherData.message !== 'ok') {
          console.log(`\nOpenWeather: ${ weatherData.message }`);
        }

        break;

      case 2:
        console.clear();
        console.log('History'.green);
        console.log('======='.green);

        searchRepo.history.forEach((value, key) => {
          const index = key + 1;
          console.log(`${ index }. ${ value }`);
        });
        break;
    }

    await pause();
  } while (mainOption !== 3)
}

main();
