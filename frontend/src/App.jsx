import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./Componentes/NavBar/NavBar";
import Estructura from "./Componentes/Estructura";
import { PruebaContext } from "./Context/Context";

function App() {
  return (
    <>
      <PruebaContext.Provider value="yoooo">
        <NavBar />
        <Estructura />
      </PruebaContext.Provider>
    </>
  );
}

export default App;
