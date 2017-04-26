import axios from 'axios';

const API_KEY = '4993b6319e6a5b5e58a4118896985921';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  axios.defaults.headers.get['Content-Type'] = 'application/json';

  const url = `${ROOT_URL}&q=${city},CAN`;
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}