const knex = require('../db/knex');
const authUtils = require('../utils/auth-utils');

class Interest {

  static async create(helper_id, task_id) {
    const query = `INSERT INTO interests(helper_id, task_id) VALUES(?, ?) RETURNING *`
    const { rows } = await knex.raw(query, [helper_id, task_id])
    return rows[0]
  }

  static async getInterests(task_id) {
    const query = `SELECT * FROM interests WHERE task_id = ?`
    const { rows } = await knex.raw(query, [task_id])
    return rows
  }

  static async deleteAllInterestsToTask(task_id) {
    const query = `DELETE FROM interests WHERE task_id = ? RETURNING *`;
    const { rows } = await knex.raw(query, [task_id])
    return rows
  }

  static async listHelpersInterested (task_id) {
    const query = `
    SELECT users.*
    FROM users
    JOIN interests ON users.id = interests.helper_id
    WHERE interests.task_id = ?;
    `
    const { rows } = await knex.raw(query, [task_id])
    return rows
    
  }
}

module.exports = Interest;