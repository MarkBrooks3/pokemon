import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

//id or name works here
const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const exports = {
  getAll,
  getOne,
};

export default exports;