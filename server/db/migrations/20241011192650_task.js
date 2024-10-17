/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('body').notNullable();
    table.integer('zipcode').notNullable();
    table.string('status').notNullable();
    table.string('created_at').notNullable();
    table.string('expiration_date').notNullable();
    table.integer('helper_id').references('id').inTable("users")
    table.integer('neighbor_id').references('id').inTable("users").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
