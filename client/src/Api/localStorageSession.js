import axios from 'axios';

export const setAuthorization = (token) => {
  axios.defaults.headers.Authorization = token && `Bearer ${token}`;
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
  setAuthorization(token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
  setAuthorization(null);
};
