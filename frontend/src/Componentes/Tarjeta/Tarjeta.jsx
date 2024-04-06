const TarjetaTonta = ({ nombre, total, titulos }) => {
  return (
    <div className="principalTarjeta">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="fondoNav col-md-4">
            <img
              src="Cowboys.png"
              className="fondoNav img-fluid rounded-start"
              alt="Icono cowboys"
            />
          </div>
          <div className="fondoNav col-md-8">
            <div className="fondoNav card-body">
              <h5 className="nombre card-title">
                <strong className="negrita">Nombre:</strong> {nombre}
                <span className="numeros badge float-right">{total}</span>
              </h5>
              <h5 className="fondoNav card-text">
                <strong className="negrita">Titulos totales:</strong>{" "}
                {titulos.length}
              </h5>
              <div>
                <p className="titulosObtenidos fondoNav">
                  <strong className="negrita">Titulos:</strong>{" "}
                  {titulos.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaTonta;
