const WEATHER_API_KEY = 'c30d0aa50fca368059f2f5eda19dcdcd';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

function zipUrl(zip) {
  return `${API_STEM}q=${zip}&units=metric&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(zip) {
  return fetch(zipUrl(zip))
  .then(response => response.json())
  .then(responseJSON => {
    let result = {};
    if (responseJSON.cod !== 200) {
      result = {
        main: responseJSON.message,
      };
    } else {
      result = {
        main: responseJSON.weather[0].main,
        description: `Current conditions: ${responseJSON.weather[0].description}`,
        temp: `${responseJSON.main.temp}'°C'`,
      };
    }
    return result;
  }).catch(error => {
    console.error(error);
  });
}

export default {fetchForecast};