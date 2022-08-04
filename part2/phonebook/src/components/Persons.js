import personsService from '../services/persons';

const Persons = ({ setPersons, persons, search, setNotification }) => {
  const remove = person => {
    if (window.confirm(`Really delete ${person.name}?`)) {
      personsService
        .remove(person)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id));
          setNotification({ message: `Removed ${person.name}`, type: 'success' });
          setTimeout(() => setNotification(null), 1500);
        });
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