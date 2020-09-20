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
            type: req.body.type,
            address: req.body.address
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

// GET /api/user/newtask/<userid>
// get the user's new task
router.get('/newtask/:userid', async (req, res) => {
    try{
        const user = await User.findById(req.params.userid);

        if(!user){
            return res.status(400).json({ errors: 'User not found' });
        }

        return res.status(200).json({ data: user });
    } catch(err){
        console.error(err);
    }
});

// PUT /api/user/newtask/<userid>
// change an user's task to Ongoing
router.put('/newtask/:userid', async (req, res) => {
    try{
        const user = await User.findById(req.params.userid);

        if(!user){
            return res.status(400).json({ errors: 'User not found' });
        }

        user.isNewTask = false;
        user.isOngoingTask = true;
        user.tasks[0].status = "Ongoing";

        await user.save();

        return res.status(200).json({ data: user });
    } catch(err){
        console.error(err);
    }
});

// PUT /api/user/completed/<userid>/<taskid>
// change an user's task to Completed
router.put('/completed/:userid/:taskid', async (req, res) => {
    try{
        const user = await User.findById(req.params.userid);

        if(!user){
            return res.status(400).json({ errors: 'User not found' });
        }

        user.isOngoingTask = false;
        user.isCompletedTask = true;

        for(let task of user.tasks){
            if(task.taskId == req.params.taskid){
                task.status = "Completed";
                break;
            }
        }

        await user.save();

        return res.status(200).json({ data: user });
    } catch(err){
        console.error(err);
    }
});

// PUT /api/user/iscompleted/<userid>
// change an user's iscompleted to false
router.put('/iscompleted/:userid', async (req, res) => {
    try{
        const user = await User.findById(req.params.userid);

        if(!user){
            return res.status(400).json({ errors: 'User not found' });
        }

        user.isCompletedTask = false;

        await user.save();

        return res.status(200).json({ data: user });
    } catch(err){
        console.error(err);
    }
});

module.exports = router;