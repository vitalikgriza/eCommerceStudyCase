import 'dotenv/config'
import express, { Express, Request, Response } from 'express';
import productsRoutes from './router/products';
import ordersRoutes from './router/orders';
import { PORT } from './constants';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(bodyParser.json());
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('<h2>Hello world </h2>');
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
