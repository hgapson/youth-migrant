export async function seed(knex) {
  // Delete all existing entries
  await knex('users').del()

  // Insert seed entries
  await knex('users').insert([
    { name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890' },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '0987654321',
    },
  ])
}
