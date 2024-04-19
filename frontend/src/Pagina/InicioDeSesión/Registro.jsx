import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registro } from "../../API/Api";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [contraseña1, setContraseña1] = useState("");
  const [contraseña2, setContraseña2] = useState("");
  const [errorRegistro, setErrorRegistro] = useState(false);
  const [errorContraseña, setErrorContraseña] = useState(false);
  const [errorVacio, setErrorVacio] = useState(false);
  const navegar = useNavigate();

  const btnRegistro = async () => {
    if (email == "" || contraseña1 == "" || contraseña2 === "") {
      setErrorVacio(true);
    } else {
      if (contraseña1 !== contraseña2) {
        setErrorContraseña(true);
        return;
      }
      const reg = {
        email: email,
        password: contraseña1,
      };
      try {
        await registro(reg);
        navegar("/");
      } catch (error) {
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
          <label htmlFor="password1">Contraseña:</label>
          <input
            id="password1"
            type="password"
            name="contrasena"
            placeholder="Ingresa tu contraseña"
            required
            value={contraseña1}
            onChange={(e) => setContraseña1(e.target.value)}
          />
        </div>
        <div className="campoLogin">
          <label htmlFor="password2">Contraseña:</label>
          <input
            id="password2"
            type="password"
            name="contrasena"
            placeholder="Repita su contraseña"
            required
            value={contraseña2}
            onChange={(e) => setContraseña2(e.target.value)}
          />
        </div>
        <div className="botonLogin">
          <Link>
            <button
              type="button"
              className="btn btn-dark"
              onClick={btnRegistro}
            >
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
          Recuerda completar todos los campos obligatorios antes de entrar en el
          pueblo.
        </p>
      )}
      {errorContraseña && (
        <p className="errorInicioSesion fondoNav">
          Las contraseñas deben coincidir para continuar. ¡Asegurate de que
          sean iguales!
        </p>
      )}
    </div>
  );
};

export default Registro;
