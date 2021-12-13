const MapboxGeocoding = require('../services/mapbox-geocoding');
const OpenWeather = require('../services/open-weather');
const StorageManager = require('../services/storage-manager');

class SearchRepository {

  constructor() {
    this.historyFilePath = './storage/repositories/search/history.json';
    this.storageManager = new StorageManager(this.historyFilePath);

    this.history = this.getHistoryFromStorage() ?? [];
  }

  async searchCities(keywords = '') {
    const mapboxService = new MapboxGeocoding(process.env.MAPBOX_KEY);
    const places = await mapboxService.searchPlaces(keywords);

    return places.map(place => {
      return {
        id: place.id,
        name: place.place_name,
        longitude: place.center[0],
        latitude: place.center[1]
      }
    });
  }

  async getWeather(latitude = '', longitude = '') {
    const openWeatherService = new OpenWeather(process.env.OPEN_WEATHER_KEY);
    const weather = await openWeatherService.getWeatherByCoordinates(latitude, longitude);

    return weather;
  }

  getHistoryFromStorage() {
    const history = this.storageManager.loadDataAsJson();
    return history;
  }

  addToHistory(cityName = '') {
    this.history.unshift(cityName);

    this.history = this.history.slice(0, 5);
    this.saveHistoryInFile();
  }

  saveHistoryInFile() {
    this.storageManager.saveData(this.history);
  }
}

module.exports = SearchRepository;
