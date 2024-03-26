import TarjetaCowboy from "../Componentes/Tarjetas/TarjetaCowboy";
import TarjetaTonta from "../Componentes/Tarjetas/TarjetaTonta";

const Inicio = () => {
  return (
    <>
      <section>
        {/* Tarjeta del día del mas tonto */}
        <h3 className="tituloH3">Tonto del día de hoy es...</h3>
        <TarjetaTonta />

        {/* Tarjeta del cowboy del día */}
        <h3 className="tituloH3">Cowboy del día de hoy es...</h3>
        <TarjetaCowboy />
      </section>
    </>
  );
};

export default Inicio;
