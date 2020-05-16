import Subscribers from './subscribersSchema';

export const getSubscriber = async (req, res, next) => {
  let subscriber;

  try {
    subscriber = await Subscribers.findById(req.params.id);

    if (!subscriber) {
      return res
        .status(404)
        .json({ message: 'Cannot find subscriber' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  req.subscriber = subscriber;
  next();
};
