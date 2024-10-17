const knex = require('../db/knex');
const authUtils = require('../utils/auth-utils');

class Helper {
  #passwordHash = null; // a private property

  // This constructor is NOT how a controller creates a new user in the database.
  // Think of it more like a formatter function. It is used by each of the User 
  // static methods to hide the hashed password of users before sending user data 
  // to the client. Since we want to keep the #passwordHash property private, we 
  // provide the isValidPassword instance method as a way to indirectly access it.
  constructor({ id, username, password_hash, zipcode, bio }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
    this.zipcode = zipcode;
    this.bio = bio;
  }

  // This instance method takes in a plain-text password and returns true if it matches
  // the User instance's hashed password. Can be used by controllers.
  isValidPassword = async (password) => (
    authUtils.isValidPassword(password, this.#passwordHash)
  );



  // Fetches ALL users from the users table, uses the constructor
  // to format each user (and hide their password hash), and returns.
  static async list() {
    const query = `SELECT * FROM helpers`;
    const result = await knex.raw(query);
    return result.rows.map((rawUserData) => new Helper(rawUserData));
  }

  static async listHelpersByZip(zipcode) {
    const query = `SELECT * FROM helpers WHERE zipcode = ?`;
    const result = await knex.raw(query, [zipcode]);
    return results.rows.map((rawUserData) => new Helper(rawUserData))
  }

  // Fetches A single user from the users table that matches
  // the given user id. If it finds a user, uses the constructor
  // to format the user and returns or returns null if not.
  static async find(id) {
    const query = `SELECT * FROM helpers WHERE id = ?`;
    const result = await knex.raw(query, [id]);
    const rawUserData = result.rows[0];
    return rawUserData ? new Helper(rawUserData) : null;
  }


  // Same as above but uses the username to find the user
  static async findByUsername(username) {
    const query = `SELECT * FROM helpers WHERE username = ?`;
    const result = await knex.raw(query, [username]);
    const rawUserData = result.rows[0];
    return rawUserData ? new Helper(rawUserData) : null;
  }

  // Hashes the given password and then creates a new user
  // in the users table. Returns the newly created user, using
  // the constructor to hide the passwordHash. 
  static async create(username, password) {
    // hash the plain-text password using bcrypt before storing it in the database
    const passwordHash = await authUtils.hashPassword(password);

    const query = `INSERT INTO helpers (username, password_hash)
      VALUES (?, ?) RETURNING *`;
    const result = await knex.raw(query, [username, passwordHash]);
    const rawUserData = result.rows[0];
    return new Helper(rawUserData);
  }

  // Updates the user that matches the given id with a new username.
  // Returns the modified user, using the constructor to hide the passwordHash. 
  static async update(username, contact_info, zipcode, bio, id) {
    const query = `
      UPDATE helpers
      SET 
      username = COALESCE (?, username),
      contact_info = COALESCE (?, contact_info),
      zipcode = COALESCE (?, zipcode),
      bio = COALESCE (?, bio)
      WHERE id=?
      RETURNING *
    `
    // patch
    const result = await knex.raw(query, [username, contact_info, zipcode, bio, id])
    const rawUpdatedUser = result.rows[0];
    return rawUpdatedUser ? new Helper(rawUpdatedUser) : null;
  };

  static async deleteAll() {
    return knex('helpers').del()
  }
}

module.exports = Helper;
