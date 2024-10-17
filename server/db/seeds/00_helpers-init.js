const User = require('../../models/User')
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('interests').del()
  await knex('tasks').del()
  await knex('users').del()

  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE tasks_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE interests_id_seq RESTART WITH 1');

  await User.create(
    'cool_cat', 
    '1234',
    null,
    10705,
    'Hey my name is Chris and I like Oreos.',
    true
  );
  await User.create(
    'l33t-guy', 
    '1234',
    null,
    10705,
    'Hey my name is Leet and I like Reeses',
    false
  );
  await User.create(
    'wowow', 
    '1234',
    null,
    11232,
    'Hey my name is Wow and I like Snickers',
    false
  );
  await User.create(
    'jahlapeno',
    '1234',
    null,
    11232,
    'Hey my name is Jah and I like Ramen',
    true
  )

  await knex('tasks').insert([
    {
      title: 'Moving furniture', 
      body: 'Hey I just need help rearranging some furniture in my home. Just a couch and a table with chairs. Thanks!', 
      helper_id: 2, 
      neighbor_id: 1, 
      zipcode: 10705,
      status: 'In-progress.',
      created_at: '10/11/2024',
      expiration_date: '10/14/2024'
    },
    {
      title: 'Moving furniture', 
      body: 'Hey I just need help rearranging some furniture in my home. Just a lamp. Thanks!', 
      helper_id: null, 
      neighbor_id: 1, 
      zipcode: 10705,
      status: 'In-progress.',
      created_at: '10/11/2024',
      expiration_date: '10/14/2024'
    },
    {
      title: 'Picking up groceries', 
      body: 'Hey I called the supermarket for an order and I need help picking it up. ', 
      helper_id: 3, 
      neighbor_id: 4, 
      zipcode: 10705,
      status: 'In-progress.',
      created_at: '10/11/2024',
      expiration_date: '10/14/2024'
    },
    {
      title: 'Moving furniture', 
      body: 'Hey I just need help rearranging some furniture in my home. Just some seats. Thanks!', 
      helper_id: null, 
      neighbor_id: 4, 
      zipcode: 10705,
      status: 'In-progress.',
      created_at: '10/11/2024',
      expiration_date: '10/14/2024'
    }
  ]);

  await knex('interests').insert([
    {helper_id: 2, task_id: 2},
    {helper_id: 3, task_id: 4}
  ]);
};
