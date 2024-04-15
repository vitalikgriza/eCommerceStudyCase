import { Router } from 'express';
import { products_all_get, product_by_id_get } from '../controller/productsController';

const router = Router();

router.get('/', products_all_get);

router.get('/:id', product_by_id_get);

export default router;
