import axios from 'axios';
axios.defaults.baseURL = `https://pure-atoll-67904.herokuapp.com/api`;
// axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGE5OTc4ZGY5OTNkODFmNTVlNjJlMSIsImlhdCI6MTY0OTU5NDY5MywiZXhwIjoxNjQ5NTk4MjkzfQ.zm-S4SM4V0MhYtvz3w2ChLLMyEOEjkZVwnRN-elMUW8'


async function fetchStatistics() {
    const { data } = await axios.get(`/transactions/statistics`);
    return data;
}
export default fetchStatistics;
