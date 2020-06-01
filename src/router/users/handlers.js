import User from '../../models/User';

export async function getUserProducts(req, res) {
  return res.status(404).json({ error: 'Not found' });
}

export async function getUser(req, res) {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    res.send(user.userView());
  } catch (err) {
    res.status(404).send({ error: 'User not found' });
  }
}
