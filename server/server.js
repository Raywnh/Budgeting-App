require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"))

app.use(express.json())

const usersRouter = require('./routes/users')
const itemsRouter = require('./routes/items')
app.use('/users', usersRouter)
app.use('/items', itemsRouter)

app.listen(5000, () => {console.log("Server started on Port 5000")})
