import { Response, Request } from 'express';
import { getAllProducts, getProductById } from '../database/products';

export const products_all_get= async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        res.send({ status: "OK", data: products });
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const product_by_id_get = async (req: Request, res: Response) => {
    try {
        const product = await getProductById(req.params.id);
        if (!product) {
            res.status(404).json({ status: "FAILED", error: 'Product not found' });
            return;
        }
        res.send({ status: "OK", data: product });
    }
    catch (error: any) {
        res.status(401).json({ status: "FAILED", error: error.message });
    }
}
