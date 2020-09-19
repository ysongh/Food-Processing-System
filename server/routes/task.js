const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

// GET /api/task/tasks?completed=false
// find all tasks that is completed or not
router.get('/tasks', async (req, res) => {
    try{
        let isCompleted = req.query.completed || false;
        const tasks = await Task.find({ isCompleted });

        return res.status(200).json({ data: tasks });
    } catch(err){
        console.error(err);
    }
});

// POST /api/task/create
// create a task
router.post('/create', async (req, res) => {
    try{
        const newTask = {
            title: req.body.title,
            description: req.body.description,
            detail: req.body.detail,
            destination: req.body.destination,
            startDate: req.body.startDate,
            workers: req.body.workers,
            gtin: req.body.gtin
        };

        const dataTask = await Task.create(newTask);

        return res.status(201).json({ data: dataTask });
        
    } catch(err){
        console.error(err);
    }
});

// GET /api/task/task/<taskid>
// find a task by id
router.get('/task/:taskid', async (req, res) => {
    try{
        const task = await Task.findById(req.params.taskid);

        return res.status(200).json({ data: task });
    } catch(err){
        console.error(err);
    }
});

module.exports = router;