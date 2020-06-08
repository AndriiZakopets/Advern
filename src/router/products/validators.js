import { updateAccountSchema } from './validationSchema';

export const createProduct = async (req, res, next) => {
  try {
    req.body.price = +req.body.price;
    await updateAccountSchema.validate(req.body);

    next();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
