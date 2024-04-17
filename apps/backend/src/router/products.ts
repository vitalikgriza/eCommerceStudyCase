import { Request, Response, Router } from 'express';
import { getAllProducts, getProductById } from '../database/products';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.json({ status: "OK", data: products });
  }
  catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) {
      res.status(404).json({ status: "FAILED", error: 'Product not found' });
      return;
    }
    res.json({ status: "OK", data: product });
  }
  catch (error: any) {
    res.status(401).json({ status: "FAILED", error: error.message });
  }
});

export default router;
