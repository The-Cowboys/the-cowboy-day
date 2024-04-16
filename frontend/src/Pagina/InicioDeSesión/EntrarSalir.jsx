import Botones from "../../Componentes/Botones";

const EntrarSalir = () => {
  const button = {
    ruta: "/login",
    infBoton: "Iniciar Sesión",
  };

  return (
    <>
      <div className="fondoNav">
        <Botones button={button} />
      </div>
    </>
  );
};

export default EntrarSalir;
