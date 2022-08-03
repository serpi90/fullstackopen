import personsService from '../services/persons';

const Persons = ({ setPersons, persons, search }) => {
  const remove = (person) => {
    personsService
      .remove(person)
      .then(() => setPersons(persons.filter(p => p.id !== person.id)));
  };

  return persons
    .filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    .map(person => (
      <p key={person.id}>
        {person.name}
        <button onClick={() => remove(person)}>delete</button>
      </p>)
    );
};

export default Persons;