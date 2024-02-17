import { Route, Routes } from "react-router-dom";
{
  /* NavBar */
}
import ListaElMasToto from "./Pagina/ListaElMasToto";
import CowboyDelDia from "./Pagina/CowboyDelDia";
{
  /* Estadisticas */
}
import EstadisticasElMasToto from "./Pagina/Estadisticas/EstadisticasElMasToto";
import EstadisticasCowboyDelDia from "./Pagina/Estadisticas/EstadisticasCowboyDelDia";
import Proximamente from "./Pagina/Estadisticas/Proximamente";
{
  /* Error404 */
}
import Error404 from "./Pagina/Error404/Error404";

const Estructura = () => {
  return (
    <>
      <div className="campo">
        <Routes>
          {/* NavBar */}
          <Route path="/" element={<ListaElMasToto />} />
          <Route path="/CowboyDelDia" element={<CowboyDelDia />} />
          <Route path="/ListaElMasToto" element={<ListaElMasToto />} />

          {/* Estadisticas */}
          <Route
            path="/EstadisticasElMasToto"
            element={<EstadisticasElMasToto />}
          />
          <Route
            path="/EstadisticasCowboyDelDia"
            element={<EstadisticasCowboyDelDia />}
          />
          <Route path="/Proximamente" element={<Proximamente />} />

          {/* Error404 */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
