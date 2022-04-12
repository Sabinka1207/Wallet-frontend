import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

toast.configure();
const toastMessage = errorMessage => {
  toast.error(errorMessage, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

// axios.defaults.baseURL = `https://pure-atoll-67904.herokuapp.com/api`;

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = "";
//   },
// };

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
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue();
    // }

    // token.set(persistedToken);

    try {
      // axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGE5OTc4ZGY5OTNkODFmNTVlNjJlMSIsImlhdCI6MTY0OTcwNjk3MywiZXhwIjoxNjQ5NzEwNTczfQ.IHeBEnPyiZFUzCgAEI4PRyh7DYUwhPPIv5rsbXvguuo`;
      const { data } = await axios.get('/transactions');
      return data.data.response;
    } catch (error) {
      // token.unset();
      alert('Your session has timed out. Please login again!');
    }
  },
);

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/transactions', transaction);
      return data;
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 404) {
        toastMessage('Упс... Что-то пошло не так');
      } else if (error.response.status == 409) {
        toastMessage('Недостаточно средств');
      }
      return rejectWithValue(error);
    }
  },
);
