import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const getAll = async () => {
  const response = await axios.get(`${baseUrl}?limit=898`);
  return response.data;
};

//id or name works here
export const getOne = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const getUrl = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const getList = async (offset, limit) => {
  const response = await axios.get(
    `${baseUrl}?offset=${offset}&limit=${limit}`
  );
  return response.data;
};
