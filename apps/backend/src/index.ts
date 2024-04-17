import 'dotenv/config'
import express, {Express, NextFunction, Request, Response} from 'express';
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

// UnKnown Routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || 'error';
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    error: err.message,
  });
});


app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
