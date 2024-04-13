const { Router } = require('express');
const { products_all_get } = require('../controller/productsController');

const router = Router();

router.get('/', products_all_get);

//
// router.get('/:productId', (req, res) => {
//   res.json({
//     id: req.params.id,
//     title: 'Product 1',
//     description: 'This is product 1',
//   });
// });

module.exports = router;
