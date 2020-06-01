import express from 'express';
import auth from './auth';
import account from './account';
import users from './users';
import products from './products';

const router = express.Router();

router.use('/auth', auth);
router.use('/account', account);
router.use('/users', users);
router.use('/products', products);

export default router;
