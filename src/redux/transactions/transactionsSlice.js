// import {createReducer} from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import getTransactions from "./transactionsOperations"

// import { 
//     fetchTransactionsSuccess
//     // addTransactionsSuccess,
// } from './transactions-actions';


// export const transactionsReducer = createReducer([], {
//     [fetchTransactionsSuccess]: (_, { payload } ) => payload,
//     // [addTransactionsSuccess ]: (state, { payload }) => [...state, payload],
// });


const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: { data: [], isLoading: false, error: null},
    extraReducers: {
      [getTransactions.fulfilled]: (state, { payload }) => {
          return { ...state, data: payload };
      },
      [getTransactions.pending]: state => {
          return {...state, isLoading: true}
      },
      [getTransactions.rejected]: () => state => {
          return {...state, error: null}
      }
  }    
})

export default transactionsSlice.reducer;