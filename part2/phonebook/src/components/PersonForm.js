import { useState } from 'react';
import personsService from '../services/persons';

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addPerson = (person) => {
    personsService
      .create(person)
      .then(newPerson => {
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewPhone('');
      });
  };

  const updatePerson = (person) => {
    if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
      personsService.update(person.id, { ...person, number: newPhone })
        .then(updatedPerson => {
          setPersons(persons.map(p => p.id === person.id ? updatedPerson : p));
          setNewName('');
          setNewPhone('');
        });
    }
  };

  const upsertPerson = event => {
    event.preventDefault();
    const person = persons.find(p => p.name === newName);
    if (person) {
      updatePerson(person);
    } else {
      addPerson({ name: newName, number: newPhone });
    }
  };

  return (
    <form>
      <div>
        name: <input value={newName} onChange={event => setNewName(event.target.value)} />
      </div>
      <div>
        number: <input value={newPhone} onChange={event => setNewPhone(event.target.value)} />
      </div>
      <div>
        <button type="submit" onClick={upsertPerson}>add/update</button>
      </div>
    </form>
  );
};

export default PersonForm;