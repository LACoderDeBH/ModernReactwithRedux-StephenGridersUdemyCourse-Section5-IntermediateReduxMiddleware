import axios from 'axios';

const API_KEY = '742d7f8cceb30b6ef7324ad5f77ebf6c';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

//actionCreator: create action that fetches weather data
export function fetchWeather(city) {
  //add on city and country
  const url = `${ROOT_URL}&q=${city},us`;
  //make ajax get request - returns a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    //pass in the promise to the action's payload property
    payload: request
  };
}
