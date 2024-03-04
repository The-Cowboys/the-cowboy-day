const pool = require("./../database");

async function getTontoByDate(dayStr) {
  const res = await pool.query("SELECT * FROM tontos WHERE dia = $1", [dayStr]);
  if (res.rows.length > 0) {
    const data = res.rows[0];
    return {
      id: data.id,
      dia: data.dia,
      cowboyId: data.cowboy_id,
      created: data.created,
    };
  }
  return null;
}

async function saveTonto(dia, cowboyId, created) {
  const res = await pool.query(
    `INSERT INTO tontos 
      (dia, cowboy_id, created) 
    VALUES 
      ($1, $2, $3)
    RETURNING *`,
    [dia, cowboyId, created]
  );

  const data = res.rows[0];
  return {
    id: data.id,
    dia: data.dia,
    cowboyId: data.cowboy_id,
    created: data.created,
  };
}

async function getTontos() {
  const res = await pool.query(
    `SELECT 
      cowboys.id, 
      cowboys.name, 
      (SELECT count(tontos.cowboy_id) FROM tontos WHERE tontos.cowboy_id = cowboys.id) as total
    FROM cowboys`
  );
  return res.rows.map((row) => {
    return {
      id: row.id,
      name: row.name,
      total: row.total,
    };
  });
}

module.exports = {
  getTontoByDate,
  saveTonto,
  getTontos,
};
