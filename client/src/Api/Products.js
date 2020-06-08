import axios from 'axios';

export const addProduct = async (payload) => {
  const { data } = await axios.post('/api/products', payload);

  return data;
};

export const getProducts = async (query) => {
  const { data } = await axios.get('/api/products', {
    params: { ...query },
  });

  return data;
};

export const getProduct = async (id) => {
  const { data } = await axios.get('/api/products/' + id);

  return data;
};
