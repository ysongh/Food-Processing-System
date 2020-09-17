const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

// POST /api/task
// create a task
router.post('/', async (req, res) => {
    try{
        const newTask = {
            title: req.body.title,
            description: req.body.description,
            detail: req.body.detail,
            destination: req.body.destination
        };

        const dataTask = await Task.create(newTask);

        return res.status(201).json({ data: dataTask });
        
    } catch(err){
        console.error(err);
    }
});

module.exports = router;