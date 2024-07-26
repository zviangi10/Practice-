const Router = require('express').Router();
const Task = require('../models/Task');

Router.get('/', async(req, res) => {
    try {
    const allTask = await Task.findAll();
    res.status(200).json(allTask);
    } catch (err) {
        res.status(500).json(err);
    }
})


//localhost:3001/api/

Router.post('/', async (req, res) => {
    //const {name, description,status} =req.body; Object Destructuring
    const newTask = Task.create({
        name: 'req.body.name,',
        description: 'req.body.description',
        status: 'req.body.status'
    });

    res.json(newTask);
})

module.exports = Router;