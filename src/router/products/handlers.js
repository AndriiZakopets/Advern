import Product from '../../models/Product';

export async function getLatestProducts(req, res) {
  res.send(req.query);
}
export async function getProductById(req, res) {}
export async function getSavedProducts(req, res) {}
export async function getProductsByIds(req, res) {}
export async function searchProducts(req, res) {}
export async function createProduct(req, res) {
  const { userId } = req.user;

  try {
    // const product = await Product.create({
    //   ownerId: userId,
    //   ...req.body,
    // });
    res.send('ok');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export async function saveMultipleProducts(req, res) {}
export async function saveProduct(req, res) {}
export async function unSaveProduct(req, res) {}
