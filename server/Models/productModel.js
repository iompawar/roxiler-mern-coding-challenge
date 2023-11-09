import mongoose from "mongoose";

// Defining Schema for database
const productSchema = new mongoose.Schema({
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        }, 
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        sold: {
            type: Boolean,
            required: true
        },
        dateOfSale: {
            type: Date,
            required: true
        }
})

// Definig Model
const productModel = new mongoose.model('product_transactions', productSchema);

export default productModel;
