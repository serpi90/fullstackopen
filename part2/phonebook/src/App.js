import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Filter search={search} setSearch={setSearch} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification} />
      <h3>Numbers</h3>
      <Persons setPersons={setPersons} persons={persons} search={search} />
    </div>
  );
};

export default App;
