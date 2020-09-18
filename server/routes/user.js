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

module.exports = router;