import express from 'express';
import path from 'path';
import config from 'config';
import modules from './modules';
import mongoose from 'mongoose';

const app = express();

const PORT = config.get('port') || 6000;

// async function start() {
//   try {
//     // await mongoose.connect(config.get('mongoUri'), {});
//   } catch (e) {
//     console.log('Server Error', e.message);
//     process.exit(1);
//   }
// }

// start();

mongoose.connect(config.get('mongoUri'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use('/api', modules);

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.listen(PORT);
