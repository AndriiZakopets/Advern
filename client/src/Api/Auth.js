import axios from 'axios';
import {
  removeToken,
  setToken,
  setAuthorization,
} from './localStorageSession';
import { getAccount } from './Account';

export const register = async (body) => {
  const { data } = await axios.post('/api/auth/register', body);

  setToken(data.token);

  return data.user;
};

export const login = async (body) => {
  const { data } = await axios.post(`api/auth/login`, body);

  setToken(data.token);

  return data.user;
};

export const logout = () => {
  removeToken();
};

export const init = async () => {
  const token = localStorage.getItem('token');

  if (token) {
    setAuthorization(token);

    try {
      const user = getAccount();

      return user;
    } catch (error) {
      console.error(error);
    }
  }

  return null;
};
