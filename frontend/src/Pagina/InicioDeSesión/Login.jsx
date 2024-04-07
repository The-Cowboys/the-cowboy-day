import Botones from "../../Componentes/Botones";

const Login = () => {
  const button = {
    ruta: "",
    infBoton: "Iniciar Sesión",
  };

  return (
    <>
      <div className="inicioSesion">
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="campoLogin">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Ingresa tu correo"
              required
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
            />
          </div>
          <div className="botonLogin">
            <Botones button={button} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
