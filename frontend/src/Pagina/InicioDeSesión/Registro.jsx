import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registro } from "../../API/Api";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navegar = useNavigate();

  const btnRegistro = async () => {
    const reg = {
      email: email,
      password: contraseña,
    };
    try {
      await registro(reg);
  
      navegar("/");
      console.log("Sos el 1");

    } catch (error) {
      console.log("manco");
    }
  };

  return (
    <div className="inicioSesion">
      <h2>Registro</h2>
      <form>
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
        {/* <div className="campoLogin">
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            name="contrasena"
            placeholder="Repita su contraseña"
            required
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div> */}
        <div className="botonLogin">
          <Link>
            <button type="button" className="btn btn-dark" onClick={btnRegistro}>
              Registrarse
            </button>
          </Link>
        </div>
        <p className="fondoNav Regi">
          ¿Ya tienes cuenta?{" "}
          <strong className="fondoNav">
            <Link className="fondoNav inicioRegistro" to="/login">
              Iniciar Sesión
            </Link>
          </strong>
        </p>
      </form>
    </div>
  );
};

export default Registro;
