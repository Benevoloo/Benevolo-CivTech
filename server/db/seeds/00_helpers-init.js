/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('interests').del()
  await knex('tasks').del()
  await knex('neighbors').del()
  await knex('helpers').del()

  await knex.raw('ALTER SEQUENCE helpers_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE neighbors_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE tasks_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE interests_id_seq RESTART WITH 1');

  await knex('helpers').insert([
    {id: 1, username: 'jahlapeno', password_hash: 'bruh123', zipcode: 10705, bio: 'Hey my name is Chris and I like Oreos.'},
    {id: 2, username: 'jahlapeno1', password_hash: 'bruh123', zipcode: 10705, bio: 'Hey my name is Chris and I like Oreos.'},
    {id: 3, username: 'jahlapeno2', password_hash: 'bruh123', zipcode: 10705, bio: 'Hey my name is Chris and I like Oreos.'}
  ]);
  
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

  await knex('tasks').insert([
    {
      title: 'Moving furniture', 
      body: 'Hey I just need help rearranging some furniture in my home. Just a couch and a table with chairs. Thanks!', 
      helper_id: 3, 
      neighbor_id: 2, 
      zipcode: 10705,
      status: 'In-progress.',
      created_at: '10/11/2024',
      expiration_date: '10/14/2024'
    },
    {
      title: 'Moving furniture', 
      body: 'Hey I just need help rearranging some furniture in my home. Just a couch and a table with chairs. Thanks!', 
      helper_id: 1, 
      neighbor_id: 1, 
      zipcode: 10705,
      status: 'In-progress.',
      created_at: '10/11/2024',
      expiration_date: '10/14/2024'
    },
    {
      title: 'Moving furniture', 
      body: 'Hey I just need help rearranging some furniture in my home. Just a couch and a table with chairs. Thanks!', 
      helper_id: 2, 
      neighbor_id: 3, 
      zipcode: 10705,
      status: 'In-progress.',
      created_at: '10/11/2024',
      expiration_date: '10/14/2024'
    }
  ]);

  await knex('interests').insert([
    {helper_id: 2, task_id: 3},
    {helper_id: 1, task_id: 2},
    {helper_id: 3, task_id: 1}
  ]);
};