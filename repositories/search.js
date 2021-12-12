const MapboxGeocoding = require('../services/mapbox-geocoding');

class SearchRepository {

  constructor() {
  }

  async searchCity(keyword = '') {
    const mapboxService = new MapboxGeocoding(process.env.MAPBOX_KEY);
    const places = await mapboxService.searchPlace(keyword);
    console.log(places);
  }
}

module.exports = SearchRepository;
