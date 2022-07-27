const usersRouter = require("express").Router()
const User = require("../models/user")
const bcrypt = require("bcrypt")

usersRouter.post("/new",async(req,res)=>{
    try {
        const {username,name,email,pw} = req.body

        if (!email.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )){
            return res.status(400).send("Invalid email")
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

module.exports = usersRouter