exports.seed = async function(knex) {
  await knex("resources").insert([
    { resource_name: "FlyLady Kitchen Zone Cleaning Checklist",
      resource_description: "Zone Cleaning Checklist can be found in Notion database under cleaning checklists" },
    { resource_name: "FlyLady Bathroom Zone Cleaning Checklist",
      resource_description: "Zone Cleaning Checklist can be found in Notion database under cleaning checklists" },
    { resource_name: "FlyLady Office Zone Cleaning Checklist",
      resource_description: "Zone Cleaning Checklist can be found in Notion database under cleaning checklists" },
  ])
};
