import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import fetchStatistics from "../../service/transactions/statisticsApi";

axios.defaults.baseURL = `https://pure-atoll-67904.herokuapp.com/api`;

const getStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async (_, { rejectWithValue }) => {
    try {
      //   axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGE5OTc4ZGY5OTNkODFmNTVlNjJlMSIsImlhdCI6MTY0OTcxMzE0NSwiZXhwIjoxNjQ5NzE2NzQ1fQ.bB4JBh3_fRxBu1DKFE-LB3X7mGDXzZDbOKZZUFGwu-Q`;
      const statistics = await axios.get('/transactions/statistics');
      return statistics.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default getStatistics;
