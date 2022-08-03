import axios from 'axios';
const baseURL = 'http://localhost:3001/persons';

const getAll = () => axios.get(baseURL).then(({ data: persons }) => persons);

const create = newPerson => axios.post(baseURL, newPerson).then(({ data: person }) => person);

const remove = person => axios.delete(`${baseURL}/${person.id}`);

const personService = { getAll, create, remove };
export default personService;