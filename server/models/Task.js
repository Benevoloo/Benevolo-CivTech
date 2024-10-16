const knex = require('../db/knex');
const authUtils = require('../utils/auth-utils');

class Task {

  static async listByZipcode(zipcode) {
    const query = `SELECT * FROM tasks where zipcode = ?`;
    const { rows } = await knex.raw(query, [zipcode]);
    console.log(rows)
    return rows;
  }

  static async getTaskById(id) {
    const query = `SELECT * FROM tasks WHERE id = ?`;
    const {rows} = await knex.raw(query, [id]);
    return rows[0];
  }

  static async updateTask(helper_id, status, id) {
    const query = `
      UPDATE tasks
      SET 
      helper_id = COALESCE (?, helper_id),
      status = COALESCE (?, status)
      WHERE id=?
      RETURNING *
    `
    // patch
    const { rows } = await knex.raw(query, [helper_id, status, id])
    return rows[0]
  };

  static async createTask(title, body, zipcode, status = "waiting", created_at, expiration_date, neighbor_id) {
    const query = `INSERT INTO tasks (title, body, zipcode, status, created_at, expiration_date, neighbor_id) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *`
    const { rows } = await knex.raw(query, [title, body, zipcode, status, created_at, expiration_date, neighbor_id])
    return rows[0];
  }

  static async deleteTask(id) {
    const query = `DELETE FROM tasks WHERE id = ? RETURNING *`;
    const { rows } = await knex.raw(query, [id]);
    return rows[0];
  }

}

module.exports = Task;