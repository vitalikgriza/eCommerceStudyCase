import { Request, Response, Router } from 'express';
import { createOrder, getUserOrders } from '../database/orders';

const router = Router();
router.get('/', async (req: Request, res: Response) => {
  try {
    const orders = await getUserOrders(req.headers.userId as string);

    if (!orders) {
      res.status(404).json({ status: "FAILED", error: 'Orders not found' });
      return;
    }
    res.json({ status: "OK", data: orders });
  }
  catch (error: any) {
    res.status(401).json({ status: "FAILED", error: error.message });
  }
});

router.post('/createOrder', async (req: Request, res: Response) => {
  try {
    const referenceNumber = (Math.random() + 1).toString(36).substring(7);
    await createOrder({ ...req.body, referenceNumber, userId: req.headers.userId as string });
    res.json({ status: "OK", data: referenceNumber });
  }
  catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
