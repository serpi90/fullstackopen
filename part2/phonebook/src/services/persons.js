import axios from 'axios';
const baseURL = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseURL).then(({ data: persons }) => persons)

const create = newPerson => axios.post(baseURL, newPerson).then(({ data: person }) => person);

const personService = { getAll, create };
export default personService;