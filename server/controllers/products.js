const productsRouter = require("express").Router()
const Product = require("../models/product")

productsRouter.get("/all", async(req,res)=>{
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        res.status(404).send(error)
    }
})
productsRouter.get("/deals",async(req,res)=>{
    try {
        const products = await Product.find({deal:true})
        res.json(products)
    } catch (error) {
        res.status(404).send(error)
    }
})
productsRouter.get("/product/:id",async(req,res)=>{
    try {
        const product = await Product.findOne({_id:req.params.id})
        res.json(product)
    } catch (error) {
        res.status(404).send(error)
    }
})
productsRouter.get("/category/:category",async(req,res)=>{
    try {
        let products
        if(req.query.order){
            if(req.query.order === "highest"){
                products = await Product.find({category:req.params.category}).sort({price:-1})
            } else {
                products = await Product.find({category:req.params.category}).sort({price:1})
            }
        } else {
            products = await Product.find({category:req.params.category})
        }
        res.json(products)
    } catch (error) {
        res.status(404).send(error)
    }
})

productsRouter.post("/new",async(req,res)=>{
    try {
        const name = req.body.name
        const category = req.body.category
        const price = req.body.price
        const product = new Product({
            name,
            category,
            price
        })
        if(req.body.deal && req.body.dealPrice){
            product.deal = req.body.deal
            product.dealPrice = req.body.dealPrice
        }
        await product.save()
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = productsRouter