import { useState } from 'react';
import personsService from '../services/persons';

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addNewPerson = event => {
    event.preventDefault();
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personsService
        .create({ name: newName, phone: newPhone })
        .then(person => {
          setPersons(persons.concat(person));
          setNewName('');
          setNewPhone('');
        });
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
        <button type="submit" onClick={addNewPerson}>add</button>
      </div>
    </form>
  );
};

export default PersonForm;