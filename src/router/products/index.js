import express from 'express';
import * as handlers from './handlers';
import bodyParser from 'body-parser';
import * as validators from './validators';
import { requiredAuth } from '../middleware';

const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/ids', handlers.getProductsByIds);
router.get('/', handlers.getProducts);
router.get('/:productId', handlers.getProductById);
router.delete(
  '/:productId',
  requiredAuth,
  handlers.deleteProductById,
);
router.post(
  '/',
  urlencodedParser,
  requiredAuth,
  validators.createProduct,
  handlers.createProduct,
);

export default router;
