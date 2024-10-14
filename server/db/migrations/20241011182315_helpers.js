/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) { // make table
  return knex.schema.createTable('helpers', (table) => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password_hash').notNullable();
    table.string('contact_info');
    table.integer('zipcode').notNullable();
    table.string('bio');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) { // drop table
  return knex.schema.dropTable('helpers')
};
