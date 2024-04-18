import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registro } from "../../API/Api";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errorRegistro, setErrorRegistro] = useState(false);
  const [errorVacio, setErrorVacio] = useState(false);
  const navegar = useNavigate();

  const btnRegistro = async () => {
    if (email == "" || contraseña == "") {
      setErrorVacio(true);
    } else {
      const reg = {
        email: email,
        password: contraseña,
      };
      try {
        await registro(reg);
        navegar("/");
        
      } catch (error) {
        // console.log(error.response.status);
        setErrorRegistro(true);
      }
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
      {errorRegistro && (
        <p className="errorInicioSesion fondoNav">
          Oops, parece que ese correo ya está registrado.
        </p>
      )}
      {errorVacio && (
        <p className="errorInicioSesion fondoNav">
          Recuerda completar todos los campos obligatorios antes de entrar en el pueblo.
        </p>
      )}
    </div>
  );
};

export default Registro;
