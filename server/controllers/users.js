const usersRouter = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
}  

usersRouter.post("/new",async(req,res)=>{
    try {
        const {username,name,email,pw} = req.body

        if (!email.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            return res.status(400).send("Invalid email")
        }
        if(username.length < 4){
            return res.status(400).send("Username must be at least 4 characters long!")
        }
        if(name.length < 4){
            return res.status(400).send("Name must be at least 4 characters long!")
        }
        if(pw.length < 4){
            return res.status(400).send("Password must be at least 4 characters long!")
        }

        const existsUsername = await User.findOne({username:username})
        if(existsUsername){
            return res.status(400).send("Username taken")
        }
        const existsEmail = await User.findOne({email:email})
        if(existsEmail){
            return res.status(400).send("Email taken")
        } 
        const password = await bcrypt.hash(pw,10)
        const user = new User({
            username,
            name,
            email,
            password
        })
        const saved = await user.save()
        res.status(201).json(saved)
    } catch (error) {
        res.status(400).json(error)
    }
})

usersRouter.get("/all",async(req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
})

usersRouter.post("/login",async(req,res)=>{
    try {
        const {username,pw} = req.body
        const user = await User.findOne({username:username})
        const passwordCorrect = user === null ? false : await bcrypt.compare(pw, user.password)
        if(!(user && passwordCorrect)){
            return res.status(401).send("Invalid username or password")
        }
        const userForToken = {
            username: user.username,
            id: user._id
        }
        const token = jwt.sign(userForToken,process.env.SECRET)
        res.status(200).send({token, username: username, name: user.name})
    } catch (error) {
        res.status(400).send(error)
    }
})
usersRouter.post("/cart", async(req,res)=>{
    try {
        const cart = req.body.cart
        const token = getTokenFrom(req)
        const decodedToken = jwt.verify(token,process.env.SECRET)
        if(!decodedToken.id){
            return response.status(401).send('invalid token')
        }
        const user = await User.findById(decodedToken.id)
        user.cart = cart
        await user.save()
        res.status(200)
    } catch (error) {
        res.status(400).send(error)
    }
})
usersRouter.get("/cart/:username",async(req,res)=>{
    try{
        const user = await User.findOne({username:req.params.username})
        res.status(200).json(user.cart)
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = usersRouter