import * as actions from './productsActions';
import * as Products from '../../Api/Products';
import { asyncOperationFactory } from '../helpers';
import addNotification from '../../Notification';

export const addProduct = asyncOperationFactory(
  Products.addProduct,
  actions.addProduct,
  () => {
    addNotification('success', 'Product succesfully added.');
  },
);

export const getProducts = asyncOperationFactory(
  Products.getProducts,
  actions.getProducts,
);

export const getProduct = asyncOperationFactory(
  Products.getProduct,
  actions.getProduct,
);

export const deleteProduct = asyncOperationFactory(
  Products.deleteProduct,
  actions.deleteProduct,
);

export { actions };
