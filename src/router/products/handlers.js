import Product from '../../models/Product';

export async function getLatestProducts(req, res) {
  const offset = +(req.query.offset ?? 0);
  const limit = +(req.query.limit ?? 20);

  const products = (await Product.find({})).sort((a, b) => {
    const aTime = a.updatedAt ?? a.createdAt;
    const bTime = b.updatedAt ?? b.createdAt;

    return bTime - aTime;
  });

  const sendData = [];

  for (
    let i = offset;
    i < limit + offset && i < products.length;
    i++
  ) {
    sendData.push(products[i].productView());
  }

  res.send(sendData);
}

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

    res.send(product.productView());
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

export async function searchProducts(req, res) {
  const offset = +(req.query.offset ?? 0);
  const limit = +(req.query.limit ?? 20);
  const priceFrom = +(req.query.priceFrom ?? 0);
  const priceTo = +(req.query.priceTo ?? Infinity);
  const location = req.query.location ?? '';
  const keywords = req.query.keywords ?? '';

  console.log(priceFrom, priceTo);

  const products = await Product.find({
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
  });

  const sendData = [];

  for (
    let i = offset;
    i < limit + offset && i < products.length;
    i++
  ) {
    sendData.push(products[i].productView());
  }

  res.send(sendData);
}

export async function createProduct(req, res) {
  try {
    const product = await Product.create({
      ownerId: req.user.userId,
      ...req.body,
    });

    res.status(201).send(product.productView());
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}
