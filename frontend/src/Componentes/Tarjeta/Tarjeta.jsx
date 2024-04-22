import { Link } from "react-router-dom";

const TarjetaTonta = ({ nombre, total, titulos, mensaje }) => {
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
                    to={`https://api.whatsapp.com/send?text=${mensaje}${nombre}`}
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
