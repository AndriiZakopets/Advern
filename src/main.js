import express from 'express';
import formData from 'express-form-data';
import path from 'path';
import config from './config';
import router from './router';
import mongoose from 'mongoose';
import * as yup from 'yup';

yup.addMethod(yup.mixed, 'defined', function (msg) {
  return this.test('defined', msg, (value) => value !== undefined);
});

const PORT = config.port;

const app = express();

async function start() {
  try {
    const db = await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    app.listen(PORT, () =>
      console.log(`Server has been started on port ${PORT}...`),
    );
  } catch (err) {
    console.error('Server Error: ', err.message);
    process.exit(1);
  }
}
start();

app.use(formData.parse());
app.use(express.json());
app.use('/api', router);

app.use(express.static(path.join(`${__dirname}/../client/build`)));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
