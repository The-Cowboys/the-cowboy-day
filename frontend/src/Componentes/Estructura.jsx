import { Route, Routes } from "react-router-dom";
import ListaElMasTonto from "./Pagina/ListaElMasTonto";
import CowboyDelDia from "./Pagina/CowboyDelDia";
import EstadisticasElMasTonto from "./Pagina/Estadisticas/EstadisticasElMasTonto";
import EstadisticasCowboyDelDia from "./Pagina/Estadisticas/EstadisticasCowboyDelDia";
import Proximamente from "./Pagina/Estadisticas/Proximamente";
import Error404 from "./Pagina/Error404/Error404";

const Estructura = () => {
  return (
    <>
      <div className="campo">
        <Routes>
          {/* NavBar */}
          <Route path="/" element={<ListaElMasTonto />} />
          <Route path="/CowboyDelDia" element={<CowboyDelDia />} />
          <Route path="/ListaElMasTonto" element={<ListaElMasTonto />} />

          {/* Estadisticas */}
          <Route path="/EstadisticasElMasTonto" element={<EstadisticasElMasTonto />} />
          <Route path="/EstadisticasCowboyDelDia" element={<EstadisticasCowboyDelDia />} />
          <Route path="/Proximamente" element={<Proximamente />} />

          {/* Error404 */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
