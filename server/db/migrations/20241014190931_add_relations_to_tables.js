/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .alterTable('tasks', (table) => {
      table.foreign('helper_id').references('id').inTable('helpers');
      table.foreign('neighbor_id').references('id').inTable('neighbors');
  })
    .alterTable('interests', (table) => {
      table.foreign('task_id').references('id').inTable('tasks');
      table.foreign('helper_id').references('id').inTable('helpers');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .alterTable('tasks', (table) => {
      table.dropColumn('helper_id');
      table.dropColumn('neighbor_id');
  })
    .alterTable('interests', (table) => {
      table.dropColumn('task_id');
      table.dropColumn('helper_id');
  })
};