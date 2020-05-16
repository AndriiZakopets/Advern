import express from 'express';
import * as middleware from './SubscribersMiddleware';
import * as handlers from './subscribersHandlers';

const router = express.Router();

router.get('/', handlers.getAllSubscribers);
router.get('/:id', middleware.getSubscriber, handlers.getSubscriber);
router.post('/', handlers.createSubscriber);
router.patch('/:id', handlers.updateSubscriber);
router.delete(
  '/:id',
  middleware.getSubscriber,
  handlers.deleteSubscriber,
);

export default router;
