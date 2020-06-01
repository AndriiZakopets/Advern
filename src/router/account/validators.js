import { updateAccountSchema } from './validationSchema';

export const updateAccount = async (req, res, next) => {
  try {
    await updateAccountSchema.validate(req.body);

    next();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
