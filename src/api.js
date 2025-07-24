import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // use your deployed server URL in production
});

export const signUp = (formData) => API.post('/auth/signup', formData);
export const signIn = (formData) => API.post('/auth/signin', formData);
