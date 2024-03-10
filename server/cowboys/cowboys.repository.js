const pool = require("./../database");

async function getAll() {
  const res = await pool.query("SELECT * FROM cowboys ORDER BY name");
  return res.rows;
}

module.exports = {
  getAll,
};
