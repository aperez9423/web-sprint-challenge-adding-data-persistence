// build your `Project` model here
const db = require("../../data/dbConfig")

module.exports = {
    getProjects,
    addProjects
}

function getProjects() {
    return db('projects');
}

function addProjects(project) {
    return db('projects as p')
    .insert(project)
}