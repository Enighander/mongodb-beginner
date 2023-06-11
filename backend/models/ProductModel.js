import mongoose from "mongoose";

const Product = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    stock:{
        type: String,
        required: true
    }
});

export default mongoose.model('Products', Product);