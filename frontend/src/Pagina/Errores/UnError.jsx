import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";

const UnError = () => {
  return (
    <>
      {/* Tarjeta esperando tonto */}
      <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
      <Tarjeta
        nombre={"Procesando un tonto"}
        total={"--"}
        titulos={["----"]}
      />
    </>
  );
};

export default UnError;