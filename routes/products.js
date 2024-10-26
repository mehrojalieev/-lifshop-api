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


// GET BY ID

router.get("/:id", async (req, res) => {
        try {
                const singleProduct = await ProductSchema.findById(req.params.id)
                if(!singleProduct){
                        return res.status(404).json({message: 'Product not Found !'})
                }
                res.status(200).json(singleProduct)
        } 
        catch (error) {
                res.status(500).json({message: error.message})        
        }
})

module.exports = router