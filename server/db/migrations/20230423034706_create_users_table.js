/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password_hash').notNullable();
    table.string('name').notNullable();
    table.string('contact_info');
    table.integer('zipcode').notNullable();
    table.string('bio');
    table.boolean('is_neighbor').notNullable().defaultTo(false);
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users');
