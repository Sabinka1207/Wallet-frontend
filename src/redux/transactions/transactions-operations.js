import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from './transactions-actions';

import axios from 'axios';
axios.defaults.baseURL = `https://pure-atoll-67904.herokuapp.com/api`;

export const addTransaction =
  ({ income, category, amount, date, comment }) =>
  dispatch => {
    const transaction = { income, category, amount, date, comment };
    dispatch(addTransactionRequest());
    axios
      .post('/transactions', transaction)
      .then(({ data }) => dispatch(addTransactionSuccess(data)))
      .catch(error => dispatch(addTransactionError(error)));
  };
