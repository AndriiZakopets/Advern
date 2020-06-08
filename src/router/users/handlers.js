import User from '../../models/User';
import Product from '../../models/Product';
import { getPage } from '../helpers';

export async function getUserProducts(req, res) {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const products = await Product.find({ ownerId: user.id });

    res.send(products);
  } catch (e) {
    res.status(500).send({ error: err.message });
  }
}

export async function getUser(req, res) {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    res.send(user.userView());
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
