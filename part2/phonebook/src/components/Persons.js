const Persons = ({ persons, search }) => {
  return persons
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .map(p => <p key={p.id}>{p.name}</p>);
};

export default Persons