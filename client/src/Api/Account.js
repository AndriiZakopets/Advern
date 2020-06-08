import axios from 'axios';

export const updateAccount = async ({
  fullName = '',
  phone = '',
  location = '',
}) => {
  const { data } = await axios.put('/api/account/user', {
    fullName,
    phone,
    location,
  });

  return data;
};

export const getAccount = async () => {
  const { data } = await axios.get('/api/account/user');

  return data;
};
