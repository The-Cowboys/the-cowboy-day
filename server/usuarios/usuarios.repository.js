const pool = require("./../database");

const convertirUsuario = (fila) => {
  return {
    email: fila.email,
    password: fila.hash,
  };
};

async function obtener(email) {
  const resultado = await pool.query(
    `
    SELECT 
      email,
      hash
    FROM usuarios
    WHERE email = $1;
    `,
    [email]
  );

  if (resultado.rows.length > 0) {
    const fila = resultado.rows[0];
    return convertirUsuario(fila);
  }
  return null;
}

async function guardar(usuario) {
  await pool.query(
    `
    INSERT INTO usuarios 
      (email, hash, estado, rol, created) 
    VALUES 
      ($1, $2, $3, $4, $5);
    `,
    [usuario.email, usuario.hash, usuario.estado, usuario.rol, usuario.created]
  );

  return {
    email: usuario.email,
    estado: usuario.estado,
  };
}

module.exports = {
  guardar,
  obtener,
};
