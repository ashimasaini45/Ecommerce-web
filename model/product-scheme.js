import mongoose from "mongoose";
import { products } from "../constants/data.js";

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const Product = mongoose.model("product", productSchema)  //product is collection in database

export default Product;
