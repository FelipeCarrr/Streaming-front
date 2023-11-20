import axios from 'axios';

//const API_BASE_URL = 'https://streaming-app.azurewebsites.net'; // Reemplaza con la URL de tu API backend
const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
