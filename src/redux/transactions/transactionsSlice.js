// import {createReducer} from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTransactions } from './transactionsOperations';
import { addTransaction } from './transactionsOperations';

// import {
//     fetchTransactionsSuccess
//     // addTransactionsSuccess,
// } from './transactionsActions';

// export const transactionsReducer = createReducer([], {
//     [fetchTransactionsSuccess]: (_, { payload } ) => payload,
//     // [addTransactionsSuccess ]: (state, { payload }) => [...state, payload],
// });

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { data: [], isLoading: false, error: null },
  extraReducers: {
    [fetchTransactions.fulfilled]: (state, { payload }) => {
      return { ...state, data: payload };
    },
    [fetchTransactions.pending]: state => {
      return { ...state, isLoading: true };
    },
    [fetchTransactions.rejected]: () => state => {
      return { ...state, error: null };
    },
    [addTransaction.fulfilled](state, { payload }) {
      state.data = [...state.data, payload];
      // console.log('state', state.data);
      // console.log('payload', payload);
    },
  },
});

export default transactionsSlice.reducer;
