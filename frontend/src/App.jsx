import { EstadoGlobal } from "./Context/EstadoGlobal";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./Componentes/NavBar/NavBar";
import Estructura from "./Componentes/Estructura";

function App() {
  return (
    <>
      <EstadoGlobal>
        <NavBar />
        <Estructura />
      </EstadoGlobal>
    </>
  );
}

export default App;
