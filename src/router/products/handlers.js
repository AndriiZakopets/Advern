import Product from '../../models/Product';
import User from '../../models/User';
import { getPage } from '../helpers';
import fs from 'fs';

export async function getProductsByIds(req, res) {
  try {
    const { id } = req.query;
    const ids = id ? (Array.isArray(id) ? id : [id]) : [];

    const products = await Product.find({ _id: { $in: ids } });

    res.send(products.map((e) => e.productView()));
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getProductById(req, res) {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }
    const owner = await User.findById(product.ownerId);

    res.send({ ...product.productView(), owner: owner.userView() });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function deleteProductById(req, res) {
  try {
    console.log('delete');
    const a = await Product.deleteOne({ _id: req.params.productId });
    console.log(a);
    res.send('ok');
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function getProducts(req, res) {
  const priceFrom = +(req.query.priceFrom ?? 0);
  const priceTo = +(req.query.priceTo ?? Infinity);
  const location = req.query.location ?? '';
  const keywords = req.query.keywords ?? '';

  const products = (
    await Product.find({
      $or: [
        {
          title: {
            $regex: keywords,
            $options: 'i',
          },
        },
        {
          description: {
            $regex: keywords,
            $options: 'i',
          },
        },
      ],
      location: {
        $regex: `${location}`,
        $options: 'i',
      },
      price: {
        $gte: priceFrom,
        $lte: priceTo,
      },
    })
  ).sort((a, b) => {
    const aTime = a.updatedAt ?? a.createdAt;
    const bTime = b.updatedAt ?? b.createdAt;

    return bTime - aTime;
  });

  res.send(products.map((e) => e.productView()));
}

export async function createProduct(req, res) {
  try {
    const photos = [];
    for (const i of Object.getOwnPropertyNames(req.files)) {
      const img = req.files[i];
      console.log(img);
      photos.push(
        `data:${img.type};base64,${fs
          .readFileSync(req.files[i].path)
          .toString('base64')}`,
      );
    }

    const product = await Product.create({
      ownerId: req.user.userId,
      photos,
      ...req.body,
    });

    res.send(product.productView());
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
