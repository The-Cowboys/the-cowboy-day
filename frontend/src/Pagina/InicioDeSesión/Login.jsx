import { useState } from "react";
import Botones from "../../Componentes/Botones";

const Login = () => {
  const button = {
    // ruta: "",
    infBoton: "Iniciar Sesión",
  };

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);

  const errorPoneBien = (e) => {
    e.preventDefault();

    if (email === "" || contraseña === "") setError(true); {
      return;
    }
  };

  return (
    <>
      <div className="inicioSesion">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={errorPoneBien}>
          <div className="campoLogin">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Ingresa tu correo"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="campoLogin">
            <label htmlFor="password">Contraseña:</label>
            <input
              id="password"
              type="password"
              name="contrasena"
              placeholder="Ingresa tu contraseña"
              required
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>
          <div className="botonLogin">
            <Botones button={button} />
          </div>
        </form>
        {error && <p>Todo los campos son obligatorios</p>}
      </div>
    </>
  );
};

export default Login;
