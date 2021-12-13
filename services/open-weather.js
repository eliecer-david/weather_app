const { default: axios } = require("axios");

class OpenWeather {

  constructor(apiKey = '') {
    this.apiKey = apiKey;

    this.axiosInstance = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/',
      params: {
        appid: this.apiKey,
        units: 'metric'
      }
    });
  }

  async getWeatherByCoordinates(latitude = '', longitude = '') {
    try {
      const response = await this.axiosInstance
        .get(`weather?lat=${ latitude }&lon=${ longitude }`);

      const data = response.data;
      return {
        message: 'ok',
        description: data.weather[0].description,
        temperature: `${ data.main.temp } °C`,
        temperatureMin: `${ data.main.temp_min } °C`,
        temperatureMax: `${ data.main.temp_max } °C`
      }
    } catch (error) {
      return {
        message: 'There was an error with OpenWeather.',
        description: null,
        temperature: null,
        temperatureMin: null,
        temperatureMax: null
      };
    }
  }
}

module.exports = OpenWeather;
