import { Route, Routes } from "react-router-dom";
import CowboyDelDia from "./Pagina/CowboyDelDia";
import Estadisticas from "./Pagina/Estadisticas";
import Acerca from "./Pagina/Acerca";
import Contacto from "./Pagina/Contacto";

const Estructura = () => {
  return (
    <>
      <div className="campo">
        <Routes>
          <Route path="/" element={<CowboyDelDia />} />
          <Route path="/Estadisticas" element={<Estadisticas />} />
          <Route path="/Acerca" element={<Acerca />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
};

export default Estructura;
