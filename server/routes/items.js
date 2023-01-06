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
router.delete('/:id', getItemById, async(req, res) => {
    try {
        await res.item.remove()
        res.json({messsage: "Deleted User"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// UPDATING ONE
router.patch('/:id', getItemById, async(req, res) => {
    if (req.body.belongsTo != null) {
        res.item.belongsTo = req.body.belongsTo
    }
    if (req.body.id != null) {
        res.item.id = req.body.id
    }
    if (req.body.name != null) {
        res.item.name = req.body.name
    }
    if (req.body.price != null) {
        res.item.price = req.body.price
    } 

    try {
        const updatedItem = await res.item.save()
        res.json(updatedItem)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Middleware
async function getItemById(req, res, next) {
    let item
    try {
        item = await Item.findOne({id:req.params.id})
        if (item == null) {
            return res.status(404).json({message: "item not found"}) 
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    res.item = item
    next()  
}


module.exports = router
