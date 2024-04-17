import { Link } from "react-router-dom";

const Registro = () => {
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
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
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
            // value={contraseña}
            // onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <div className="campoLogin">
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            name="contrasena"
            placeholder="Repita su contraseña"
            required
            // value={contraseña}
            // onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <div className="botonLogin">
          <Link>
            <button
              type="button"
              className="btn btn-dark"
              // onClick={IniciarSesion}
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
    </div>
  );
};

export default Registro;
