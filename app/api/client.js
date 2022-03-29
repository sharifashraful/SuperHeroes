import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com',
  responseType: 'json',
});

export { apiClient };
