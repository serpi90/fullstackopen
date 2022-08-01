const Countries = ({ countries, search }) => {
  return countries
    .filter(p => p.name.common.toLowerCase().includes(search.toLowerCase()))
    .map(p => <p key={p.cca3}>{p.name.common}</p>);
};

export default Countries