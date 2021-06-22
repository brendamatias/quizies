import axios from 'axios';

const api = axios.create({
  baseURL: 'https://quizies-api.herokuapp.com/v1',
});

export default api;
