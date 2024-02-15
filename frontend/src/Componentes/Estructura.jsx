import { Route, Routes } from "react-router-dom";
import CowboyDelDia from "./Pagina/CowboyDelDia";
import Estadisticas from "./Pagina/Estadisticas";
import Acerca from "./Pagina/Acerca";
import Contacto from "./Pagina/Contacto";
import EstadisticasElMasToto from "./Pagina/Estadisticas/EstadisticasElMasToto";
import EstadisticasCowboyDelDia from "./Pagina/Estadisticas/EstadisticasCowboyDelDia";
import Proximamente from "./Pagina/Estadisticas/Proximamente";

const Estructura = () => {
  return (
    <>
      <div className="campo">
        <Routes>
          <Route path="/" element={<CowboyDelDia />} />
          <Route path="/Estadisticas" element={<Estadisticas />} />
          <Route path="/Acerca" element={<Acerca />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/EstadisticasElMasToto" element={<EstadisticasElMasToto />} />
          <Route path="/EstadisticasCowboyDelDia" element={<EstadisticasCowboyDelDia />} />
          <Route path="/Proximamente" element={<Proximamente />} />
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
