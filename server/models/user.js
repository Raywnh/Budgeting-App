const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    budget: {
        type: Number,
        default: 0
    }
})



module.exports = mongoose.model('User', userSchema)
