import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  const addNewPerson = event => {
    event.preventDefault();
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({
        id: persons.length + 1,
        name: newName,
        phone: newPhone
      }));
      setNewName('');
      setNewPhone('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <div>
          filter shown with <input value={search} onChange={event => setSearch(event.target.value)} />
        </div>
      </div>
      <h2>add a new</h2>
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
      <h2>Numbers</h2>
      {persons
        .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .map(p => <p key={p.id}>{p.name}</p>)}
    </div>
  )
}

export default App