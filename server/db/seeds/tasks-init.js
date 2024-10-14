/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      title: 'Moving furniture', 
      body: 'Hey I just need help rearranging some furniture in my home. Just a couch and a table with chairs. Thanks!', 
      helper_id: 4, 
      neighbor_id: 2, 
      zipcode: 10705,
      status: 'In-progress.',
      created_at: '10/11/2024',
      expiration_date: '10/14/2024'
    },
    {
      title: 'Moving furniture', 
      body: 'Hey I just need help rearranging some furniture in my home. Just a couch and a table with chairs. Thanks!', 
      helper_id: 5, 
      neighbor_id: 1, 
      zipcode: 10705,
      status: 'In-progress.',
      created_at: '10/11/2024',
      expiration_date: '10/14/2024'
    },
    {
      title: 'Moving furniture', 
      body: 'Hey I just need help rearranging some furniture in my home. Just a couch and a table with chairs. Thanks!', 
      helper_id: 6, 
      neighbor_id: 3, 
      zipcode: 10705,
      status: 'In-progress.',
      created_at: '10/11/2024',
      expiration_date: '10/14/2024'
    }
  ]);
};
