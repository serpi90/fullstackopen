const Countries = ({ countries, search }) => {
  const filtered = countries.filter(p => p.name.common.toLowerCase().includes(search.toLowerCase()));
  if (filtered.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  return filtered.map(p => <p key={p.cca3}>{p.name.common}</p>);
};

export default Countries