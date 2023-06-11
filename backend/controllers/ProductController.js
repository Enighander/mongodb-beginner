import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getProductsById = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const insertdproduct = await product.save();
        res.status(201).json(insertdproduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateProduct = async (req, res) => {
    try {
        const updatedproduct = await Product.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedproduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const deletedproduct = await Product.deleteOne({_id:req.params.id});
        res.status(200).json(deletedproduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
