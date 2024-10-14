/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('interests').del()
  await knex('interests').insert([
    {helper_id: 2, task_id: 4},
    {helper_id: 1, task_id: 5},
    {helper_id: 3, task_id: 6}
  ]);
};
