const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
    belongsTo: {
        type: String,
       
    },
    id: {
        type: String,
        
    },
    name: {
        type: String,
        
    },
    price: {
        type: Number,
       
    }
})

module.exports = mongoose.model('Item', itemSchema)