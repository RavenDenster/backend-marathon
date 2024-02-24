const db = require('./db');

// CREATE
async function createUser(name, email) {
  const result = await db.query('INSERT INTO users(name, email) VALUES($1, $2) RETURNING *', [name, email]);
  return result.rows[0];
}

// READ
async function getUsers() {
  const result = await db.query('SELECT * FROM users');
  return result.rows;
}

// UPDATE
async function updateUser(id, name, email) {
  const result = await db.query('UPDATE users SET name = $2, email = $3 WHERE id = $1 RETURNING *', [id, name, email]);
  return result.rows[0];
}

// DELETE
async function deleteUser(id) {
  const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
}

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
