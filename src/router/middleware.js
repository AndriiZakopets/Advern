import jwt from 'jsonwebtoken';
import config from '../config';

export const requiredAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'No Authorization was found in request.headers',
      });
    }

    const tokenRegex = /Bearer\s[a-zA-z0-9_.]+/g;

    if (!tokenRegex.test(token)) {
      return res.status(400).json({
        error: 'Format is Authorization: Bearer [token]',
      });
    }

    const decodedToken = jwt.verify(
      token.split(' ')[1],
      config.jwtSecret,
    );
    req.user = decodedToken;

    next();
  } catch (err) {
    res.status(401).json({
      error: 'Authorization token is invalid',
    });
  }
};
