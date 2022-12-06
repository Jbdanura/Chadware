const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const logger = require("./utils/logger")
const {PORT,MONGODB_URI} = require("./utils/config")
const usersRouter = require("./controllers/users")
const productsRouter = require('./controllers/products')

mongoose.connect(MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

const https = require("https");
setInterval(function() {
    https.get("https://chadware.onrender.com");
    https.get("https://paquipatelo.ga");
}, 300000)

app.use(cors())
app.use(express.json())
app.use(express.static('files'))
app.use("/api/users",usersRouter)
app.use("/api/products",productsRouter)

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
