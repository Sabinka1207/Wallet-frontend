import axios from 'axios';

const BASE_URL = 'https://pure-atoll-67904.herokuapp.com/api';

export const addTransaction = async transaction => {
  const { data } = await axios.post(`${BASE_URL}/transactions`, transaction);
  console.log('data:', data);
  return data;
};
