const express = require('express')
const router = express.Router()
const User = require('../models/user')

// GETTING ALL
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({messsage: error.message}) // 500: server error
    }
})

// CREATING ONE
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        items: req.body.items,
        budget: req.body.budget 
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser) // 201: successful creation
    } catch (error) {
        res.status(400).json({message: error.message}) // 400: clientside error
    }
})

// GETTING ONE
router.get('/:id', getUser, (req, res) => {
    res.send(res.user.name)
})

// UPDATING ONE

router.patch('/:id', (req, res) => {

})

// DELETING ONE
router.delete('/:id', (req, res) => {

})

// Middleware
async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({message: "User not found"}) // 404: could not find 
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    res.user = user
    next()
}


module.exports = router
