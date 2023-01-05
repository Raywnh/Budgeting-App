const express = require('express')
const router = express.Router()
const Item = require('../models/item')

// CREATING ONE ITEM
router.post('/', async (req, res) => {
    const item = await Item.create({
        belongsTo: req.body.belongsTo,
        id: req.body.id,
        name: req.body.item,
        price: req.body.price
    })
    
    try {
        const newUser = await item.save()
        res.status(201).json(newUser) // 201: successful creation
    } catch (error) {
        res.status(400).json({message: error.message}) // 400: clientside error
    }
})


async function getUserByName(req, res, next) {
    let user
    try {
        user = await User.findOne({name:req.params.name})
        if (user == null) {
            return res.status(404).json({message: "User not found"}) 
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    res.user = user
    next()  
}


module.exports = router
