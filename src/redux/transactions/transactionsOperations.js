import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from './transactionsActions';

// axios.defaults.baseURL = `https://pure-atoll-67904.herokuapp.com/api`;

// import {
//     fetchTransactionsRequst,
//     fetchTransactionsSuccess,
//     fetchTransactionsError,
// } from './transactionsActions';

// export const fetchTransactions = () => async dispatch => {
//     dispatch(fetchTransactionsRequst());
//     try {
//         // axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGI1MzRmMDc5MzRmY2U1ZDI4YzVmMCIsImlhdCI6MTY0OTQ2NzAxNCwiZXhwIjoxNjQ5NDcwNjE0fQ.ztqvrHaW96O8sB36RvivFjhosdSEYcNPjXX9ZrWgeZ8`;
//       const { data } = await axios.get('/');

//       dispatch(fetchTransactionsSuccess(data.data.response));
//     } catch (error) {
//       dispatch(fetchTransactionsError(error.message));
//     }
//   };

export const fetchTransactions = createAsyncThunk(
  'transactions/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/transactions');
      return data.data.response;
    } catch (error) {
      // token.unset();
      alert('Your session has timed out. Please login again!');
    }
  },
);

// export const addTransaction =
//   ({ income, category, amount, date, comment }) =>
//   dispatch => {
//     const transaction = { income, category, amount, date, comment };
//     dispatch(addTransactionRequest());
//     axios
//       .post('/transactions', transaction)
//       .then(({ data }) => dispatch(addTransactionSuccess(data)))
//       .catch(error => dispatch(addTransactionError(error)));
//   };

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/transactions', transaction);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);
