// Complete your db configuration using the `environment` variable.
const environment = process.env.NODE_ENV || "development";

const knex = require("knex")
const knexfile = require("../knexfile")

const configOptions = knexfile[environment]

module.exports = knex(configOptions)