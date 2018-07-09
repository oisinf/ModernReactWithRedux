import axios from 'axios';

const API_KEY = '3ffef70bff0aa71b20c82f175924d619';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_ERROR = 'FETCH_ERROR';

export function fetchWeather(cityName){
    const url = `${ROOT_URL}&q=${cityName},us`;
    
    //const request = axios.get(url);
    return axios.get(url).then(response => {return {type: FETCH_WEATHER, payload: response}})
    .catch(() => {return {type: FETCH_ERROR}});
    //console.log('Request: ', request);
    
}