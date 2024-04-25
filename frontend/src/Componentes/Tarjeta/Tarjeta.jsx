import { Link } from "react-router-dom";

const TarjetaTonta = ({ nombre, total, titulos, todaLaInfo }) => {
  let laInfo = "";
  if (todaLaInfo == "perfil") {
    laInfo =
      "Tonto seleccionado: " +
      nombre +
      "%0A" +
      "Veces tonto: " +
      total +
      "%0A" +
      "Titulos: " +
      titulos;
  }
  if (todaLaInfo == "tontoDelDía") {
    laInfo = "Tonto del día de hoy es " + nombre;
  }
  if (todaLaInfo == "CowboyDelDía") {
    laInfo = "Cowboy del día de hoy es " + nombre;
  }
  if (todaLaInfo == "errorTonto") {
    laInfo = "El algoritmo está preparando un tontos " + nombre;
  }
  if (todaLaInfo == "errorCowboy") {
    laInfo = "El algoritmo está preparando un cowboy " + nombre;
  }

  return (
    <div className="principalTarjeta">
      <div className="card tarjeta">
        <div className="row g-0">
          <div className="fondoNav imgTarjeta col-md-4">
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
              <div className="fondoNav">
                <p className="titulosObtenidos fondoNav">
                  <strong className="negrita">Titulos:</strong>{" "}
                  {titulos.join(", ")}
                </p>
                <div className="fondoNav">
                  <Link
                    to={`https://api.whatsapp.com/send?text= ${laInfo}`}
                    target="_blank"
                  >
                    <button type="button" className="btn btn-dark">
                      whatsapp
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaTonta;
