const CountryItem = ({ name }) => {
  return <p>{name}</p>;
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
  </>;
}

const Countries = ({ countries, search }) => {
  const filtered = countries.filter(p => p.name.common.toLowerCase().includes(search.toLowerCase()));
  if (filtered.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (filtered.length === 1) {
    return <Country country={filtered[0]} />
  }
  return filtered.map(c => <CountryItem key={c.cca3} name={c.name.common} />);
};

export default Countries