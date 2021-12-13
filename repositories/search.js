const MapboxGeocoding = require('../services/mapbox-geocoding');
const OpenWeather = require('../services/open-weather');

class SearchRepository {

  constructor() {
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
}

module.exports = SearchRepository;
