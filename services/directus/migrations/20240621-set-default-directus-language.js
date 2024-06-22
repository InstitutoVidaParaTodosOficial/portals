export async function up(knex) {
  await knex("directus_settings").insert([
    {
      id: 1,
      default_language: "pt_BR"
    }
  ])
}

export async function down(knex) {
  await knex("directus_settings").where({ id: 1 }).del()
}
