import 'dotenv/config'
import express, { Express, Request, Response } from 'express';
import productsRoutes from './router/products';
import ordersRoutes from './router/orders';
import authRoutes from './router/auth';
import { PORT } from './constants';
import bodyParser from 'body-parser';
import { auth } from './middlewares/auth';

const app: Express = express();

app.use(bodyParser.json());
app.use('/products', auth, productsRoutes);
app.use('/orders', auth, ordersRoutes);
app.use('/auth', authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('<h2>Hello world </h2>');
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
