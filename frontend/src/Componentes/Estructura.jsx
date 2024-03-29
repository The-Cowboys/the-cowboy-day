import { Route, Routes } from "react-router-dom";
import ElMasTonto from "../Pagina/ElMasTonto";
import CowboyDelDia from "../Pagina/CowboyDelDia";
import EstadisticasElMasTonto from "../Pagina/Estadisticas/EstadisticasElMasTonto";
import EstadisticasCowboyDelDia from "../Pagina/Estadisticas/EstadisticasCowboyDelDia";
import Proximamente from "../Pagina/Estadisticas/Proximamente";
import Error404 from "../Pagina/Errores/Error404";
import Inicio from "../Pagina/Inicio";
import EstructuraDePerfil from "../Pagina/PerfilDeParticipante/EstructuraDePerfil";

const Estructura = () => {
  return (
    <>
      <div className="campo">
        <Routes>
          {/* NavBar */}
          <Route path="/ElMasTonto" element={<ElMasTonto />} />
          <Route path="/CowboyDelDia" element={<CowboyDelDia />} />

          {/* Inicio */}
          <Route path="/" element={<Inicio /> } />

          {/* Estadisticas */}
          <Route path="/EstadisticasElMasTonto" element={<EstadisticasElMasTonto />} />
          <Route path="/EstadisticasCowboyDelDia" element={<EstadisticasCowboyDelDia />} />
          <Route path="/Proximamente" element={<Proximamente />} />

          {/* Perfil de participante */}
          <Route path="/EstructuraDePerfil/:id" element={<EstructuraDePerfil />} />

          {/* Error404 */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
