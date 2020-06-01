import User from '../../models/User';

export async function getAccount(req, res) {
  try {
    const { userId } = req.user;

    const user = await User.findById(userId);

    res.send(user.accountView());
  } catch (err) {
    res.status(404).send({ error: 'User not found' });
  }
}

export async function updateAccount(req, res) {
  const { userId } = req.user;

  await User.updateMany(
    { _id: userId },
    { ...req.body, updatedAt: Date.now() },
  );

  const user = await User.findById(userId);

  res.json(user.accountView());
}
