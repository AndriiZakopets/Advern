import { createSelector } from 'reselect';

const productsSelector = (state) => state.products.products;
const productSelector = (state) => state.products.product;

export const getProducts = createSelector(
  productsSelector,
  (state) => state,
);

export const getProduct = createSelector(
  productSelector,
  (state) => state,
);
