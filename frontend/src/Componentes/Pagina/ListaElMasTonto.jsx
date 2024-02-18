import TarjetaDia from "./InfoTonto/TarjetaDia";
import ListaParticipantes from "./InfoTonto/ListaParticipantes";

const ListaElMasTonto = () => {
  const tarjeta = {
    titulo: "Tonto del día de hoy es...",
    persona: "Nombre: Jorge",
    cantidad: "68",
    titulos: "Titulos",
    listaTitulos: "lol",
  };
  const LP = {
    persona: "Jorge",
    cantidad: "68",
  };

  return (
    <>
      <section>
        {/* Tarjeta del día */}
        <TarjetaDia tarjeta={tarjeta} />

        <h3 className="tituloH3">Lista de participantes</h3>
        {/* Lista de participantes */}
        <ListaParticipantes LP={LP} />
        <ListaParticipantes LP={LP} />
      </section>
    </>
  );
};

export default ListaElMasTonto;
