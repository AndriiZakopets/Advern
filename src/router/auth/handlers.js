import jwt from 'jsonwebtoken';
import config from '../../config';
import User from '../../models/User';
import * as passwords from '../../services/passwords';

const createToken = (user) =>
  jwt.sign({ userId: user.id }, config.jwtSecret, {
    expiresIn: '7d',
  });

export const register = async (req, res) => {
  try {
    const { email, fullName, password } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      return res.status(400).send({ error: 'Email is already used' });
    }

    const passwordHash = await passwords.hash(password);

    const user = await User.create({
      fullName,
      passwordHash,
      email,
    });

    const token = createToken(user);

    res.cookie('token', token, { httpOnly: true });
    res.status(201).send({ token, user: user.accountView() });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ error: 'User does not exist' });
    }

    const isPasswordMatch = await passwords.compare(
      password,
      user.passwordHash,
    );

    if (!isPasswordMatch) {
      return res.status(400).send({
        error: 'That password was incorrect. Please try again.',
      });
    }

    const token = createToken(user);

    res.cookie('token', token, { httpOnly: true });
    res.send({ token, user: user.accountView() });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
