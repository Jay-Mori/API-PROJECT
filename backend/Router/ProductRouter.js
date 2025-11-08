const express = require('express');
const ProductController = require('../controller/ProductController')


const ProductRouter = express.Router();

ProductRouter.get('/Test', ProductController.test);
ProductRouter.get('/products', ProductController.getAllProducts);
ProductRouter.post('/products', ProductController.createProduct);

module.exports = ProductRouter;