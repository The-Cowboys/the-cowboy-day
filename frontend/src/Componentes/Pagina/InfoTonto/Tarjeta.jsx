import "../EstilosElMasTonto.css";
import { ApiNombres } from "/src/Componentes/API/ApiNombres.jsx"

const Tarjeta = ({ tarjeta }) => {

  ApiNombres.get("https://thecowboys.duckdns.org/api/cowboys")
    .then ( resp => {
      console.log(resp);
    })









  return (
    <>
      <div className="principal card mb-3">
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
                {tarjeta.persona}
                <span className="badge float-right">{tarjeta.cantidad}</span>
              </h5>
              <h6 className="fondoNav card-text">{tarjeta.titulos}</h6>
              <div>
                <p className="titulosObtenidos fondoNav">
                  {tarjeta.listaTitulos}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarjeta;
