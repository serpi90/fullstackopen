import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const loadCountriesFromServer = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  }
  useEffect(loadCountriesFromServer, []);

  return (
    <div>
      <Filter search={search} setSearch={setSearch} />
      <Countries countries={countries} search={search} />
    </div>
  )
}

export default App
