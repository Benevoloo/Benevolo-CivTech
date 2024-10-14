/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('neighbors').del()
  await knex('neighbors').insert([
    {
      username: 'hello1',
      password_hash: '123',
      zipcode: '10705'
    },
    {
      username: 'hello2',
      password_hash: '123',
      zipcode: '10705'
    },
    {
      username: 'hello3',
      password_hash: '123',
      zipcode: '10705'
    }
  ]);
};
