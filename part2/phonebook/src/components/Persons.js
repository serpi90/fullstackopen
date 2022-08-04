import personsService from '../services/persons';

const Persons = ({ setPersons, persons, search }) => {
  const remove = (person) => {
    if (window.confirm(`Really delete ${person.name}?`)) {
      personsService
        .remove(person)
        .then(() => setPersons(persons.filter(p => p.id !== person.id)));
    }
  };

  return persons
    .filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    .map(person => (
      <p key={person.id}>
        {person.name} <a href={`tel:${person.number.replaceAll(/[^0-9+]/g, '')}`}>{person.number}</a>&nbsp;
        <button onClick={() => remove(person)}>delete</button>
      </p>)
    );
};

export default Persons;