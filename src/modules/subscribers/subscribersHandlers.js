import Subscribers from './subscribersSchema';

export const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscribers.find();
    Subscribers.findOne();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSubscriber = async (req, res) => {
  res.send(req.subscriber.name);
};

export const createSubscriber = async (req, res) => {
  console.log(req.body);
  const body = req.body || {};

  const subscriber = new Subscribers(body);

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).send(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateSubscriber = async (req, res) => {};

export const deleteSubscriber = async (req, res) => {
  try {
    await req.subscriber.remove();
    res.json({ message: 'Subscriber deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
