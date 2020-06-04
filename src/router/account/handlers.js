import User from '../../models/User';

export async function getAccount(req, res) {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      res.status(404).send({ error: 'User not found' });
    }

    res.send(user.accountView());
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function updateAccount(req, res) {
  try {
    await User.updateOne(
      { _id: req.user.userId },
      { ...req.body, updatedAt: Date.now() },
    );

    const user = await User.findById(req.user.userId);

    res.json(user.accountView());
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
