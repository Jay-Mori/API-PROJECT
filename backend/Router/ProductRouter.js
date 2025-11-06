const express = require('express');
const ProductController = require('../controller/ProductController')


const ProductRouter = express.Router();

ProductRouter.get('/Test', ProductController.test);

module.exports = ProductRouter;