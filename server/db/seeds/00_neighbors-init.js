/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('neighbors').del()
  await knex('neighbors').insert([
    {
      id: 1,
      username: 'hello1',
      password_hash: '123',
      zipcode: '10705'
    },
    {
      id: 2,
      username: 'hello2',
      password_hash: '123',
      zipcode: '10705'
    },
    {
      id: 3,
      username: 'hello3',
      password_hash: '123',
      zipcode: '10705'
    }
  ]);
};
