import "./EstilosTitulos.css";

const ListaTitulos = () => {
  return (
    <>
      <p className="d-inline-flex gap-1">
        <a
          className="decoracionNone"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Título más reciente.
        </a>
      </p>
      <div className="collapse " id="collapseExample">
        <div className="fondoNav">Navideño, Cumpleañero, Poker Tonto</div>
      </div>
    </>
  );
};

export default ListaTitulos;
