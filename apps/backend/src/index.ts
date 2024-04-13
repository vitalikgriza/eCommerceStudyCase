require('dotenv').config();
const express = require('express');
const productsRoutes = require('./router/products');

const app = express();

app.use('/products', productsRoutes);
app.get('/', (req: any, res: any) => {
  res.send('<h2>Hello world </h2>');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
