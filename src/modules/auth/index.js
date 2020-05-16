import express from 'express';
import * as handlers from './handlers';

const router = express.Router();

router.get('/login', handlers.login);

export default router;
