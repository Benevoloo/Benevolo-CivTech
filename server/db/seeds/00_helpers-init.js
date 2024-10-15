/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('helpers').del()
  await knex('helpers').insert([
    {id: 1, username: 'jahlapeno', password_hash: 'bruh123', zipcode: 10705, bio: 'Hey my name is Chris and I like Oreos.'},
    {id: 2, username: 'jahlapeno1', password_hash: 'bruh123', zipcode: 10705, bio: 'Hey my name is Chris and I like Oreos.'},
    {id: 3, username: 'jahlapeno2', password_hash: 'bruh123', zipcode: 10705, bio: 'Hey my name is Chris and I like Oreos.'}
  ]);
};