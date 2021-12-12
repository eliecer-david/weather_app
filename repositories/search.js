const MapboxGeocoding = require('../services/mapbox-geocoding');

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
        lng: place.center[0],
        lat: place.center[1]
      }
    });
  }
}

module.exports = SearchRepository;
