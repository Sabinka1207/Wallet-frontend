import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from './transactions-actions';

const transactions = createReducer([], {
  [addTransactionSuccess]: (state, { payload }) => [...state, payload],
});

const loading = createReducer(false, {
  [addTransactionRequest]: () => true,
  [addTransactionSuccess]: () => false,
  [addTransactionError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({ transactions, loading, error });
