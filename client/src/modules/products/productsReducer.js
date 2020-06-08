import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const initialState = {
  products: [],
  product: null,
};

export const productsReducer = handleActions(
  {
    [actions.getProducts.start]: (state, action) => ({
      ...state,
      products: [],
    }),
    [actions.getProducts.success]: (state, action) => ({
      ...state,
      products: action.payload,
    }),
    [actions.getProduct.start]: (state, action) => ({
      ...state,
      product: null,
    }),
    [actions.getProduct.success]: (state, action) => ({
      ...state,
      product: action.payload,
    }),
  },
  initialState,
);

export default productsReducer;
