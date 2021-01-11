exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      table.increments("id")
      table.text("project_name", 120).notNullable()
      table.text("project_description", 120)
      table.boolean("project_completed").notNullable().defaultTo(false)
  })

  await knex.schema.createTable("resources", (table) => {
      table.increments("id")
      table.text("resource_name", 120).notNullable().unique()
      table.text("resource_description", 120)
  })

  await knex.schema.createTable("tasks", (table) => {
      table.increments("id")
      table.text("task_description", 120).notNullable()
      table.text("task_notes", 120)
      table.boolean("task_completed").notNullable().defaultTo(false)
      table.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
  })

  await knex.schema.createTable("projects_resources" , (table) => {
      table.integer("project_id")
        .notNullable()
        .references("id")
        .inTable("projects")
      table.integer("resource_id")
        .notNullable()
        .references("id")
        .inTable("resources")
      table.primary(["project_id", "resource_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExist("projects_resources")
  await knex.schema.dropTableIfExist("tasks")
  await knex.schema.dropTableIfExist("resources")
  await knex.schema.dropTableIfExist("projects")
};
