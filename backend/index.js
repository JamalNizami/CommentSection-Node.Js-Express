const express = require("express")
const connectDB = require("./config/db")
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

connectDB()
const app = express()


app.use('/api/post', require('./routes/postRoutes'))

app.listen(port, () => console.log(`Server start on port ${port}`))