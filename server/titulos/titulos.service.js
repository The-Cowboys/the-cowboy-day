const pool = require("../database");

async function getAll() {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM titulos ORDER BY created", (error, results) => {
      if (error) {
        return reject(error);
      }

      const titulos = results.rows.map((row) => {
        return {
          id: row.id,
          titulo: row.name,
          created: row.created,
          updated: row.updated,
        };
      });

      resolve(titulos);
    });
  });
}

async function deleteById(id) {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM titulos WHERE id = $1", [id], (error, _) => {
      if (error) {
        return reject(error);
      }

      resolve();
    });
  });
}

async function getAllByCowboyId(id) {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM titulos WHERE cowboy_id = $1 ORDER BY created",
      [id],
      (error, results) => {
        if (error) {
          return reject(error);
        }

        const titulos = results.rows.map((row) => {
          return {
            id: row.id,
            titulo: row.name,
            created: row.created,
            updated: row.updated,
          };
        });

        resolve(titulos);
      }
    );
  });
}

async function saveTitulo(cowboyId, data) {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO titulos 
    (name, cowboy_id, created) 
    VALUES 
    ($1, $2, $3)
    RETURNING *`,
      [data.name, cowboyId, data.created],
      (error, result) => {
        if (error) {
          return reject(error);
        }

        const res = result.rows[0];

        resolve({
          id: res.id,
          titulo: res.name,
          created: res.created,
          updated: res.updated,
        });
      }
    );
  });
}

module.exports = {
  getAll,
  deleteById,
  getAllByCowboyId,
  saveTitulo,
};
