const axios = require('axios');

class MapboxGeocoding {

  constructor(apiKey = '') {
    this.apiKey = apiKey;

    this.axiosInstance = axios.create({
      baseURL: 'https://api.mapbox.com/geocoding/v5/',
      params: {
        access_token: this.apiKey
      }
    });
  }

  async searchPlace(place = '') {
    try {
      const response = await this.axiosInstance.get(`mapbox.places/${ place }.json`);
      return response.data.features;
    } catch (error) {
      return [];
    }
  }
}

module.exports = MapboxGeocoding;
