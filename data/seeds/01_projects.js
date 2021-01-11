exports.seed = async function(knex) {
  await knex("projects").insert([
    { project_name: "Kitchen Deep Clean",
      project_description: "Cleaning the kitchen to start the New Year off right!",
      project_completed: false },
    { project_name: "Bathrooms Deep Clean",
      project_description: "Cleaning the bathrooms to start the New Year off right!",
      project_completed: false },
    { project_name: "Office Reorganization",
      project_description: "Improving work/school productivity",
      project_completed: true }
  ])
};
