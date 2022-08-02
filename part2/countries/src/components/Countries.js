import Weather from './Weather';

const CountryItem = ({ name, setSearch }) => {
  return <p> {name} <button onClick={() => setSearch(name)}> show </button> </p>;
}

const Country = ({ country }) => {
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
    <Weather city={country.capital[0]} />
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