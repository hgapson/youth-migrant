export async function up(knex) {
  return knex.schema.createTable('eventregistors', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('phone')
    table.timestamps(true, true)
  })
}

export async function down(knex) {
  return knex.schema.dropTable('eventregistors')
}
