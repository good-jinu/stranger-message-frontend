import axios from 'axios';

const apiClient = axios.create({
      baseURL: process.env.BASE_URL,
});

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };