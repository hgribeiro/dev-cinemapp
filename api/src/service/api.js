
import axios from 'axios';

const api = axios.create({
  baseURL: `http://www.omdbapi.com/`,
});

// const api = axios.create({
//   baseURL: `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`,
// });
export default api;

