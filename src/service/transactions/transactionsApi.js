import axios from 'axios';
axios.defaults.baseURL = `https://pure-atoll-67904.herokuapp.com/api`;

export const addTransaction = transaction => {
  return axios.post('/transactions', transaction).then(({ data }) => data);
};
