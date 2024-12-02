const bcrypt = require("bcryptjs");

const usuariosRepository = require("./usuarios.repository");

const authService = require("./../auth/auth.service");

const { ROL_USUARIO } = require("./roles");
const { ESTADO_ACTIVACION_PENDIENTE } = require("./estados");


const registrar = async (usuarioSolicitud) => {
  const hashedPassword = await bcrypt.hash(usuarioSolicitud.password, 10);
  const usuario = {
    email: usuarioSolicitud.email,
    hash: hashedPassword,
    estado: ESTADO_ACTIVACION_PENDIENTE,
    rol: ROL_USUARIO,
    created: new Date(),
  };

  await usuariosRepository.guardar(usuario);
  return {
    email: usuario.email,
    estado: usuario.estado,
  };
};

const login = async (usuarioSolicitud) => {
  const usuario = await usuariosRepository.obtener(usuarioSolicitud.email);
  if (usuario) {
    const passwordCorrecto = await bcrypt.compare(
      usuarioSolicitud.password,
      usuario.password
    );

    if (passwordCorrecto) {
      const token = authService.generateAccessToken(usuario.email, usuario.rol, usuario.estado)
      return {
        token
      };
    }
  }

  throw new Error("Usuario no encontrado");
};

module.exports = {
  registrar,
  login,
};
