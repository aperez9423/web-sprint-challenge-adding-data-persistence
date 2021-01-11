// build your `Task` model here
const db = require("../../data/dbConfig")

module.exports = {
    getTasks,
    addTask
}

function getTasks() {
    return db('tasks as t')
        .join('projects as p', 'p.id', 'project_id')
        .select('t.id as task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
        .orderBy('t.id')
}

function addTask(task) {
    return db('tasks')
    .insert(task)
}