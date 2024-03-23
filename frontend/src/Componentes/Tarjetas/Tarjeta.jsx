const Tarjeta = ({ datos }) => {

  console.log (datos)
  // Aquí verificamos la condición antes de retornar el componente
  if (datos) {
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
                  {datos.persona}
                  <span className="badge float-right">{datos.cantidad}</span>
                </h5>
                <h6 className="fondoNav card-text">{datos.titulos}</h6>
                <div>
                  <p className="titulosObtenidos fondoNav">
                    {datos.listaTitulos}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // Si la condición no se cumple, devolvemos null o cualquier otro componente deseado
    return (
      <h1>hola {datos}</h1>
    );
  }
};

export default Tarjeta;