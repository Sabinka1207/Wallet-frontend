import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// import fetchStatistics from "../../service/transactions/statisticsApi";

axios.defaults.baseURL = `https://pure-atoll-67904.herokuapp.com/api`;
 
const getStatistics = createAsyncThunk(
    'statistics/fetchStatistics', 
    async({month, year}, {rejectWithValue})=>{
        try {
            const statistics = await axios.get("/transactions/statistics", {
              params: { month, year },
            });
           
            return statistics.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    })

    export default getStatistics;   