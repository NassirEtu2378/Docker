const db = require("../db");

// GET USERS
exports.getUsers = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// CREATE USER
exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
};