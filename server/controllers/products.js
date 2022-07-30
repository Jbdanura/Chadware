const productsRouter = require("express").Router()
const Product = require("../models/product")
const path = require("path")

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
productsRouter.get("/image/:id",async(req,res)=>{
    try {
        const id = req.params.id
        res.sendFile(path.resolve(__dirname + "/../files/"+id+".png"))
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

productsRouter.post("/new",async(req,res)=>{
    try {
        console.log(req.body)
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
        console.log(error)
    }
})

module.exports = productsRouter