import express from 'express';
import auth from './auth';
import subscribers from './subscribers';

const modules = express();

modules.use('/auth', auth);
modules.use('/subscribers', subscribers);

export default modules;
