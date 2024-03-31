const TarjetaTonta = ({ nombre, titulos, titulosCantidad, total }) => {
  return (
    <div className="principalTarjeta">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="fondoNav col-md-4">
            <img
              src="/Cowboys.png"
              className="fondoNav img-fluid rounded-start"
              alt="Icono cowboys"
            />
          </div>
          <div className="fondoNav col-md-8">
            <div className="fondoNav card-body">
              <h5 className="nombre card-title">
                Nombre: {nombre}
                <span className="numeros badge float-right">{total}</span>
              </h5>
              <h5 className="fondoNav card-text">
                Titulos totales: {titulosCantidad}
              </h5>
              <div>
                <p className="titulosObtenidos fondoNav">Titulos: {titulos}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaTonta;
