const usuarioService = require("./usuarios.service");

const registrar = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const usuario = { email, password };

  try {    
    const result = await usuarioService.registrar(usuario);
    res.send(result);
  } catch (error) {
    console.error(error);

    res.status(500).send({ error: "Error al registrar usuario" });
  }
};

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const usuario = { email, password };

  try {
    const respuesta = await usuarioService.login(usuario);
    res.send(respuesta);
  } catch (error) {
    console.error(error);

    res.status(401).send({ error: "No auntenticado" });
  }
};

module.exports = {
  registrar,
  login,
};
