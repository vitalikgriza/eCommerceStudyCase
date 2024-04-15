import router from './products';
import { Request, Response } from 'express';
import { createOrder, getOrder } from '../database/orders';

router.get('/:id', async (req: Request<{ id: string }>, res: Response) => {
  try {
    const order = await getOrder(req.params.id);
    if (!order) {
      res.status(404).json({ status: "FAILED", error: 'Order not found' });
      return;
    }
    res.send({ status: "OK", data: order });
  }
  catch (error: any) {
    res.status(401).json({ status: "FAILED", error: error.message });
  }
});

router.post('/createOrder', async (req: Request, res: Response) => {
  try {
    const referenceNumber = (Math.random() + 1).toString(36).substring(7);
    const order = await createOrder({ ...req.body, referenceNumber });
    res.send({ status: "OK", data: referenceNumber });
  }
  catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
