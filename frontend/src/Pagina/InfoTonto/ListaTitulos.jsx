const ListaTitulos = () => {
  return (
    <>
      <p className="d-inline-flex gap-1">
        <a
          className="ListaTitulos"
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
        <div className="fondoNav">...</div>
      </div>
    </>
  );
};

export default ListaTitulos;
