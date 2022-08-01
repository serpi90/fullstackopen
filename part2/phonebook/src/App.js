import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')

  const loadPersonsFromServer = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }
  useEffect(loadPersonsFromServer, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App
