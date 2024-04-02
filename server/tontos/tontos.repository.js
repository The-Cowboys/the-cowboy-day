const pool = require("./../database");

const convertirCowboy = (row) => {
  return {
    id: row.id,
    nombre: row.name,
    total: row.total,
    correo: row.email,
  };
};

async function getTontoByDate(dayStr) {
  const res = await pool.query(
    `
    SELECT 
      t.dia AS dia, 
      c.id AS id,
      c.name AS name,
      c.email AS email,
      ti.name AS titulo,
      COUNT(t1.id)::int AS total
    FROM cowboys c
    INNER JOIN tontos t ON t.cowboy_id = c.id
    LEFT JOIN titulos ti ON ti.cowboy_id = c.id
    LEFT JOIN tontos t1 ON t1.cowboy_id = c.id
    WHERE t.dia = $1 
    GROUP BY t.dia, c.id, c.name, ti.name;
    `,
    [dayStr]
  );

  if (res.rows.length > 0) {
    const firstRow = res.rows[0];
    const cowboy = convertirCowboy(firstRow);
    return {
      ...cowboy,
      dia: firstRow.dia,
      titulos: res.rows.map((row) => row.titulo).filter((t) => t),
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
      c.email AS email,
      ti.name AS titulo,
      COUNT(t.cowboy_id)::int AS total
    FROM cowboys c
    LEFT JOIN tontos t ON t.cowboy_id = c.id
    LEFT JOIN titulos ti ON ti.cowboy_id = c.id
    GROUP BY c.id, c.name, ti.name
    ORDER BY total DESC;
    `
  );

  const groupedData = res.rows.reduce((acc, row) => {
    if (acc.has(row.id)) {
      const data = acc.get(row.id);
      data.titulos.push(row.titulo);
    } else {
      const titulos = [];
      if (row.titulo) titulos.push(row.titulo);
      const cowboy = convertirCowboy(row);
      acc.set(row.id, {
        ...cowboy,
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
      c.email AS email,
      ti.name AS titulo,
      COUNT(t.cowboy_id)::int AS total
    FROM cowboys c
    LEFT JOIN tontos t ON t.cowboy_id = c.id
    LEFT JOIN titulos ti ON ti.cowboy_id = c.id
    WHERE c.id = $1
    GROUP BY c.id, c.name, ti.name;
    `,
    [idCowboy]
  );

  if (res.rows.length > 0) {
    const firstRow = res.rows[0];
    const cowboy = convertirCowboy(firstRow);
    return {
      ...cowboy,
      dia: firstRow.dia,
      titulos: res.rows.map((row) => row.titulo).filter((t) => t),
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
