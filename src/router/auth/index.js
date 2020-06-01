import express from 'express';
import * as handlers from './handlers';
import * as validators from './validators';

const router = express.Router();

router.post('/login', validators.login, handlers.login);
router.post('/register', validators.register, handlers.register);

export default router;
