/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('interests', (table) => {
    table.increments();
    table.integer('helper_id');
    table.integer('task_id');
  })
  .alterTable('interests', (table) => {
    table.foreign('task_id').references('id').inTable('tasks');
    table.foreign('helper_id').references('id').inTable('users');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('interests')
};
