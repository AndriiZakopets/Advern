import express from 'express';
import * as handlers from './handlers';
import * as validators from './validators';
import { requiredAuth } from '../middleware';

const router = express.Router();

router.get('/latest', handlers.getLatestProducts);
router.get('/ids', handlers.getProductsByIds);
router.get('/search', handlers.searchProducts);
router.get('/:productId', handlers.getProductById);
router.post(
  '/',
  requiredAuth,
  validators.createProduct,
  handlers.createProduct,
);

export default router;
