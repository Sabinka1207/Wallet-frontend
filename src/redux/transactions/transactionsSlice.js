import { createSlice } from "@reduxjs/toolkit";
import { fetchTransactions } from "./transactionsOperations";
import { addTransaction } from "./transactionsOperations";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: { data: [], isLoading: false, error: false },
  extraReducers: {
    [fetchTransactions.fulfilled]: (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    },
    [fetchTransactions.pending]: (state) => {
      return { ...state, isLoading: true };
    },
    [fetchTransactions.rejected]: () => (state) => {
      return { ...state, error: null };
    },
    [addTransaction.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [addTransaction.fulfilled](state, { payload }) {
      state.data = [...state.data, payload];
      state.isLoading = false;
      state.error = false;
    },
    [addTransaction.rejected](state, { payload }) {
      state.data = [];
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default transactionsSlice.reducer;
