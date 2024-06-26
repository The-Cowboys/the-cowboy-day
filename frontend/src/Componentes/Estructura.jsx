import { Route, Routes } from "react-router-dom";
import ElMasTonto from "../Pagina/ElMasTonto/ElMasTonto";
import CowboyDelDia from "../Pagina/CowboyDelDia/CowboyDelDia";
import EstadisticasElMasTonto from "../Pagina/Estadisticas/EstadisticasElMasTonto";
import EstadisticasCowboyDelDia from "../Pagina/Estadisticas/EstadisticasCowboyDelDia";
import Proximamente from "../Pagina/Estadisticas/Proximamente";
import Error404 from "../Pagina/Errores/Error404";
import Error from "../Pagina/Errores/Error";
import Inicio from "../Pagina/Inicio";
import EstructuraDePerfil from "../Pagina/ElMasTonto/PerfilDeParticipante/EstructuraDePerfil";
import Login from "../Pagina/InicioDeSesión/Login";
import Registro from "../Pagina/InicioDeSesión/Registro";

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
          <Route path="/login" element={<Login /> } />
          <Route path="/registro" element={<Registro /> } />

          {/* Estadisticas */}
          <Route path="/EstadisticasElMasTonto" element={<EstadisticasElMasTonto />} />
          <Route path="/EstadisticasCowboyDelDia" element={<EstadisticasCowboyDelDia />} />
          <Route path="/Proximamente" element={<Proximamente />} />

          {/* Perfil de participante */}
          <Route path="/EstructuraDePerfil/:id" element={<EstructuraDePerfil />} />

          {/* Errores */}
          <Route path="/*" element={<Error404 />} />
          <Route path="/¡Oops!/Parece/que/tomé/el/camino/equivocado./¡Cuidado/con/los/bandidos/digitales!" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
