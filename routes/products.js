const express = require("express")
const ProductSchema = require("../models/product")

const router = express.Router()

router.get("/all",  async (req, res) => {
        try {
                const products = await ProductSchema.find()
                res.status(200).json(products)
        } 
        catch (error) {
            res.status(500).json({message: error.message})    
        }
})

module.exports = router