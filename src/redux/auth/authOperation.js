import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = `https://pure-atoll-67904.herokuapp.com/api`;

toast.configure();
const toastMessage = errorMessage => {
  toast.error(errorMessage, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 8000,
  });
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST, /users/register
 * body: { name, email, password }
 */
const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/register', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toastMessage('Ошибка ввода данных! Попробуйте еще раз!');
      } else if (error.response.status === 409) {
        toastMessage('Почта уже используется.');
      } else if (error.response.status === 500) {
        toastMessage('Сервер временно не работает. Попробуйте позже!');
      } else {
        toastMessage('Упс... что-то пошло не так. Перезагрузите страницу.');
      }
      return rejectWithValue(error);
    }
  },
);

/*
 * POST, /users/login
 * body: { email, password }
 */
const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toastMessage('Неверная почта или пароль. Введите корректные данные.');
      return rejectWithValue(error);
    }
  },
);

/*
 * GET, /users/logout
 */
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    if (error.response.status === 500) {
      toastMessage('Сервер временно не работает. Попробуйте позже!');
    } else {
      toastMessage('Упс... что-то пошло не так. Перезагрузите страницу.');
    }
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      token.unset();
      toastMessage('Время сессии истекло. Пожалуйста, войдите снова.');
      return thunkAPI.rejectWithValue();
    }
  },
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
