import { useEffect, useState } from 'react';
import axios from 'axios';

export const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const Weather = ({ city }) => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', { params: { appid: apiKey, q: city, units: 'metric' } })
      .then(({ data }) => setWeather({
        temperature: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        wind: data.wind.speed,
      }));
  }, [city]);

  if (!weather.temperature) return <></>;
  return (
    <section>
      <h3>Weather in {city}</h3>
      <p>Temperature: {weather.temperature} Celsius</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} />
      <p>Wind: {weather.wind} m/s</p>
    </section>
  );
};

export default Weather;