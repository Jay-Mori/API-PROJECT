const { Product } = require('../Model/ProductModel');
const ProductRouter = require('../Router/ProductRouter');

const ProductController = {

    test: (req, res) => {
        res.send("Product Controller is working fine");
    },

    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: "Error fetching products" });
        }
    },

    createProduct: async (req, res) => {
        try {
            const { title, price, category, image } = req.body;
            const newProduct = new Product({ title, price, category, image });
            await newProduct.save();
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: "Error creating product" });
        }
    }
}

module.exports = ProductController;