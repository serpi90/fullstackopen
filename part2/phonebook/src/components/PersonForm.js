import { useState } from 'react';
import axios from 'axios'

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const addNewPerson = event => {
    event.preventDefault();
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      axios
        .post('http://localhost:3001/persons', { name: newName, phone: newPhone })
        .then(({ data: person }) => {
          setPersons(persons.concat(person));
          setNewName('');
          setNewPhone('');
        })
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

export default PersonForm