import { Route, Routes } from "react-router-dom";
import CowboyDelDia from "./Pagina/CowboyDelDia";
import Estadisticas from "./Pagina/Estadisticas";
import ListaElMasToto from "./Pagina/ListaElMasToto";
import EstadisticasElMasToto from "./Pagina/Estadisticas/EstadisticasElMasToto";
import Proximamente from "./Pagina/Estadisticas/Proximamente";

const Estructura = () => {
  return (
    <>
      <div className="campo">
        <Routes>
          <Route path="/" element={<ListaElMasToto />} />
          <Route path="/CowboyDelDia" element={<CowboyDelDia />} />
          <Route path="/Estadisticas" element={<Estadisticas />} />
          <Route path="/ListaElMasToto" element={<ListaElMasToto />} />
          <Route path="/EstadisticasElMasToto" element={<EstadisticasElMasToto />} />
          <Route path="/Proximamente" element={<Proximamente />} />
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
