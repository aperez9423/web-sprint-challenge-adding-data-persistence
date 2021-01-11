// build your `/api/tasks` router here
const express = require("express")

const Tasks = require("./model.js")

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to get tasks.'
        })
    })
})

router.post('/', (req, res) => {
    const taskData = req.body
    
    Tasks.addTask(taskData)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to add new task."
            })
        })
})

module.exports = router;