const express = require('express');
const router = express.Router();

const User = require('../models/User');

// GET /api/user/workers
// find all workers
router.get('/workers', async (req, res) => {
    try{
        const users = await User.find({ type: 'Worker' });

        return res.status(200).json({ data: users });
    } catch(err){
        console.error(err);
    }
});

// POST /api/user/signup
// create a user
router.post('/signup', async (req, res) => {
    try{
        const newUser = {
            name: req.body.name,
            type: req.body.type
        };

        const dataUser = await User.create(newUser);

        return res.status(201).json({ data: dataUser });
        
    } catch(err){
        console.error(err);
    }
});

// PUT /api/user/login
// login the user
router.put('/login', async (req, res) => {
    try{
        const user = await User.findOne({ name: req.body.name });

        if(!user){
            return res.status(400).json({ errors: 'User not found' });
        }

        return res.status(200).json({ data: user });
    } catch(err){
        console.error(err);
    }
});

module.exports = router;