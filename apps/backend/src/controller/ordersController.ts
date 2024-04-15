import { Request, Response } from 'express';
import { createOrder, getOrder } from '../database/orders';

const order_by_id_get = async (req: Request<{ id: string }>, res: Response) => {
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
}

const create_order_post = async (req: Request, res: Response) => {
    try {
        // TODO add validations;
        const order = await createOrder(req.body);
        res.send({ status: "OK", data: order });
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export { order_by_id_get, create_order_post };
