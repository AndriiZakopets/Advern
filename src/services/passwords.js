import bcrypt from 'bcrypt';
import config from '../config';

export const hash = (text) =>
  bcrypt.hash(text, config.hash.bcrypt.saltRounds);

export const compare = bcrypt.compare;
