const pool = require("../database");

function convertRowToObject(row) {
  return {
    id: row.id,
    titulo: row.name,
    created: row.created,
    updated: row.updated,
  };
}

async function getAll() {
  const results = await pool.query("SELECT * FROM titulos ORDER BY created");
  return results.rows.map(convertRowToObject);
}

async function deleteById(id) {
  await pool.query("DELETE FROM titulos WHERE id = $1", [id]);
}

async function getAllByCowboyId(id) {
  const results = await pool.query(
    "SELECT * FROM titulos WHERE cowboy_id = $1 ORDER BY created",
    [id]
  );

  return results.rows.map(convertRowToObject);
}

async function saveTitulo(cowboyId, data) {
  const result = await pool.query(
    `INSERT INTO titulos 
      (name, cowboy_id, created) 
    VALUES 
        ($1, $2, $3)
    RETURNING *`,
    [data.name, cowboyId, data.created]
  );
  return convertRowToObject(result.rows[0]);
}

module.exports = {
  getAll,
  deleteById,
  getAllByCowboyId,
  saveTitulo,
};
