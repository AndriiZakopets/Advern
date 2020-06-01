import { registerSchema, loginSchema } from './validationSchema';

export const register = async (req, res, next) => {
  try {
    await registerSchema.validate(req.body);

    next();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    await loginSchema.validate({
      email,
      password,
    });

    next();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
