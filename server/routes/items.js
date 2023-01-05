const express = require('express')
const router = express.Router()
const Item = require('../models/item')

// CREATING ITEM
router.post('/:name', async (req, res) => {
    const item = await Item.create({
        belongsTo: req.body.belongsTo,
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    })
    
    try {
        const newUser = await item.save()
        res.status(201).json(newUser) // 201: successful creation
    } catch (error) {
        res.status(400).json({message: error.message}) // 400: clientside error
    }
})

// GETTING ITEMS FROM A SPECIFIC USERS  
router.get('/:name', async (req, res) => {

    try {
        const items = await Item.find({belongsTo:req.params.name})
        res.json(items)
    } catch (error) {
        res.status(500).json({messsage: error.message})
    }
 
})

// DELETING ONE
router.delete('/', async(req, res) => {
    try {
        await Item.remove()
        res.json({messsage: "Deleted User"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


async function getUserByName(req, res, next) {
    let user
    try {
        user = await Item.findOne({name:req.params.name})
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
