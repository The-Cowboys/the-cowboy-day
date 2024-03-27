const pool = require("./../database");

async function getTontoByDate(dayStr) {
  const res = await pool.query(
    `
    SELECT 
      t.dia dia, 
      c.id AS id,
      c.name AS name,
      ti.name AS titulo,
      COUNT(t.cowboy_id)::int AS total
    FROM tontos t
    INNER JOIN cowboys c ON t.cowboy_id = c.id
    LEFT JOIN titulos ti ON ti.cowboy_id = c.id
    WHERE t.dia = $1
    GROUP BY t.dia, c.id, c.name, ti.name;
    `,
    [dayStr]
  );

  if (res.rows.length > 0) {
    const firstRow = res.rows[0];
    return {
      dia: firstRow.dia,
      id: firstRow.id,
      nombre: firstRow.name,
      total: firstRow.total,
      titulos: res.rows.map((row) => row.titulo),
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
    `
    SELECT 
      c.id AS id,
      c.name AS name,
      ti.name AS titulo,
      COUNT(t.cowboy_id)::int AS total
    FROM cowboys c
    INNER JOIN tontos t ON t.cowboy_id = c.id
    LEFT JOIN titulos ti ON ti.cowboy_id = c.id
    GROUP BY c.id, c.name, ti.name;
    `
  );

  const groupedData = res.rows.reduce((acc, row) => {
    if (acc.has(row.id)) {
      const data = acc.get(row.id);
      data.titulos.push(row.titulo);
    } else {
      const titulos = [];
      if (row.titulo) titulos.push(row.titulo);
      acc.set(row.id, {
        id: row.id,
        nombre: row.name,
        total: row.total,
        titulos: titulos,
      });
    }
    return acc;
  }, new Map());

  return Array.from(groupedData.values());
}

async function getTontoById(idCowboy) {
  const res = await pool.query(
    `
    SELECT 
      c.id AS id,
      c.name AS name,
      ti.name AS titulo,
      COUNT(t.cowboy_id)::int AS total
    FROM cowboys c
    INNER JOIN tontos t ON t.cowboy_id = c.id
    LEFT JOIN titulos ti ON ti.cowboy_id = c.id
    WHERE c.id = $1
    GROUP BY c.id, c.name, ti.name;
    `,
    [idCowboy]
  );

  if (res.rows.length > 0) {
    const firstRow = res.rows[0];
    return {
      dia: firstRow.dia,
      id: firstRow.id,
      nombre: firstRow.name,
      total: firstRow.total,
      titulos: res.rows.map((row) => row.titulo),
    };
  }
  return null;
}

module.exports = {
  getTontoByDate,
  saveTonto,
  getTontos,
  getTontoById,
};
