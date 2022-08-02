import { useEffect, useState } from 'react'
import axios from 'axios'

const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const CountryItem = ({ name, setSearch }) => {
  return <p> {name} <button onClick={() => setSearch(name)}> show </button> </p>;
}

const Country = ({ country }) => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          appid: apiKey,
          q: country.capital[0],
          units: 'metric',
        }
      })
      .then(response => setWeather({
        temperature: response.data.main.temp,
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed
      }))
  }, [country.capital])

  return <>
    <h2>{country.name.common}</h2>
    <p>Capital: {country.capital.join(', ')}</p>
    <p>Area: {country.area} km²</p>
    <h3>Languages:</h3>
    <ul>
      {Object
        .entries(country.languages)
        .map(([key, lang]) => <li key={key}>{lang}</li>)}
    </ul>
    <img src={country.flags.png} alt="flag" />
    <h3>Weather in {country.capital[0]}</h3>
    <p>Temperature: {weather.temperature} Celsius</p>
    {weather.icon ? <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.description} /> : []}
    <p>Wind: {weather.wind} m/s</p>
  </>;
}

const Countries = ({ countries, search, setSearch }) => {
  const filtered = countries.filter(p => p.name.common.toLowerCase().includes(search.toLowerCase()));
  if (filtered.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (filtered.length === 1) {
    return <Country country={filtered[0]} />
  }
  return filtered.map(c => <CountryItem key={c.cca3} name={c.name.common} setSearch={setSearch} />);
};

export default Countries