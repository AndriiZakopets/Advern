import express from 'express';
import * as handlers from './handlers';

const router = express.Router();

router.get('/:userId/products', handlers.getUserProducts);

export default router;
