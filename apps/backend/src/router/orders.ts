import router from './products';
import { create_order_post, order_by_id_get } from '../controller/ordersController';

router.get('/:id', order_by_id_get);

router.post('/createOrder', create_order_post);

export default router;
