const productsService = require('../database/products');

exports.products_all_get= async (req: any, res: any) => {
    try {
        const products = await productsService.getAllProducts();
        await res.send({ status: "OK", data: products });
    }
    catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
