const express = require('express')
const router = express.Router()
const User = require('../models/user')

// CREATING ONE
router.post('/', async (req, res) => {
    const user = await User.create({
        name: req.body.name,
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
router.get('/:name', getUserByName, (req, res) => {
    res.json(res.user)
})

// UPDATING ONE

router.patch('/:name', getUserByName, async(req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name
    }
    if (req.body.budget != null) {
        res.user.budget = req.body.budget
    }

    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


// MIDDLEWARE
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
