import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com', // Change this to your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
