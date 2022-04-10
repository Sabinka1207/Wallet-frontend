import { createAction } from '@reduxjs/toolkit';

export const addTransactionRequest = createAction(
  'transactions/addTransactionRequest',
);

export const addTransactionSuccess = createAction(
  'transactions/addTransactionSuccess',
);

export const addTransactionError = createAction(
  'transactions/addTransactionError',
);
