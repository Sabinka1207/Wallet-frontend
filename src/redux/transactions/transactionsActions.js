// import {createAction} from '@reduxjs/toolkit';

// export const fetchTransactionsRequst = createAction('transactions/fetchTransactionsRequst');

// export const fetchTransactionsSuccess = createAction('transactions/fetchTransactionsSuccess');

// export const fetchTransactionsError = createAction('transactions/fetchTransactionsError');

// export const addTransactionsRequst = createAction('transactions/addTransactionsRequst');

// export const addTransactionsuccess = createAction('transactions/addTransactionsuccess');

// export const addTransactionsError = createAction('transactions/addTransactionsError');

// export const deleteTransactionsRequst = createAction('transactions/deleteTransactionsRequst');

// export const deleteTransactionsSuccess = createAction('transactions/deleteTransactionsSuccess');

// export const deleteTransactionsError = createAction('transactions/deleteTransactionsError');

// export const filterTransactions = createAction('transactions/filterTransactions');

export const getTransactions = state => state.transactions.data
export const isLoading = state => state.transactions.isLoading;
export const error = state => state.transactions.error;