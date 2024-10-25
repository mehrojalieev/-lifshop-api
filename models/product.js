const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
   
})

const ProductSchema = mongoose.model("products", productSchema)

module.exports = ProductSchema