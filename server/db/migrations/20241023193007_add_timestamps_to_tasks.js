// Note the use of alterTable and dropColumn in these functions!
exports.up = (knex) => {
  return knex.schema.alterTable('tasks', (table) => {
    table.timestamps(true, true);
  })
};


exports.down = (knex) => {
  return knex.schema.alterTable('tasks', (table) => {
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  })
};