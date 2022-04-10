import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchStatistics from "../../service/transactions/statisticsApi";

const getStatistics = createAsyncThunk(
    'statistics/fetchStatistics', 
    async(_, {rejectWithValue})=>{
        try {
            const statistics = await fetchStatistics();
            return statistics;
        } catch (error) {
            return rejectWithValue(error)
        }
    })

    export default getStatistics;   