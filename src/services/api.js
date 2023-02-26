import axios from 'axios';
import { apiKey } from '../api.json';

export async function getWeatherData(value) {
  try {
    const current = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${value.lat}&lon=${value.lon}&appid=${apiKey}&units=metric`);
    const forecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${value.lat}&lon=${value.lon}&appid=${apiKey}&units=metric&cnt=8`);
    return { current: current.data, forecast: forecast.data };
  }
  catch(error) {
    console.log(error);
    return { error: error.response ? error.response.data.message : error.message };
  }
}