import { pageSize } from '../config';

export const formatDate = (dateNum) => {
  const date = new Date(dateNum);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const getPage = (products, page) => {
  const start = pageSize * (page - 1);
  const end = start + pageSize;

  return products.slice(start, end);
};

export const isFileImage = (file) => {
  const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  return file && acceptedImageTypes.includes(file['type']);
};
