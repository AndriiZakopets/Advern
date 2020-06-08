import { createAsyncActions } from '@letapp/redux-actions';

export const addProduct = createAsyncActions('products/ADD_PRODUCT');
export const getProducts = createAsyncActions(
  'products/GET_PRODUCTS',
);
export const getProduct = createAsyncActions('products/GET_PRODUCT');
