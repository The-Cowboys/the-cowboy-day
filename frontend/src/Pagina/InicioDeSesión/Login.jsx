import { useState } from "react";
import { InicioSesion } from "../../API/Api";
import { Link, useNavigate } from "react-router-dom";

// Que muestra mi pantalla?
//  - Input para ingresar email
//  - Input para ingresar contraseña
//  - Boton que guarda login
//  - Posible mensaje de error
// Variables del estado:
//  - Estado para el input - email
//  - Estado para el input - contraseña
//  - Estado booleano para el error
// Acciones de la pantalla:
//  - 1 sola el login
//  Pasos:
//  1. declarar los estados
//  2. asociar los estado al HTML
//  3. hacer una funcion para cada accion

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navegar = useNavigate();

  const IniciarSesion = async () => {
    const sesion = {
      email: email,
      password: contraseña,
    };
    const token = await InicioSesion(sesion);
    window.localStorage.setItem("token", JSON.stringify(token));
    navegar("/");

    // Tareas pendiente
    // 1 navegar al inicio
    // 2 guardar el token en la sesion ? buscar
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
            <Link>
              <button
                type="button"
                className="btn btn-dark"
                onClick={IniciarSesion}
              >
                Iniciar Sesión
              </button>
            </Link>
          </div>
          <p className="fondoNav Regi">
            ¿No tienes una cuenta?{" "}
            <strong className="fondoNav">Regístrate</strong>
          </p>
        </form>
        {/* {error && <p>Todo los campos son obligatorios</p>} */}
      </div>
    </>
  );
};

export default Login;
