import axios from 'axios';

// URL BASE
const url = axios.create({
  baseURL: 'http://localhost:5000/'
});

const api = {
  surveys: () => url.get('surveys')
};

export default api;
