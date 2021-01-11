// build your `/api/projects` router here
const express = require("express")

const Projects = require("./model.js")

const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to get projects.'
        })
    })
})

router.post('/', (req, res) => {
    const projectData = req.body
    Projects.addProjects(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to add new project."
            })
        })
})

module.exports = router;