import express from 'express';
import * as handlers from './handlers';
import * as validators from './validators';
import { requiredAuth } from '../middleware';

const router = express.Router();

router.get('/latest', handlers.getLatestProducts);
router.get('/:productId', handlers.getProductById);
router.get('/saved', handlers.getSavedProducts);
router.get('/ids', handlers.getProductsByIds);
router.get('/search', handlers.searchProducts);
router.post(
  '/',
  requiredAuth,
  validators.createProduct,
  handlers.createProduct,
);
router.post('/saved', handlers.saveMultipleProducts);
router.post('/:productId/save', handlers.saveProduct);
router.post('/:productId/unsave', handlers.unSaveProduct);

export default router;
