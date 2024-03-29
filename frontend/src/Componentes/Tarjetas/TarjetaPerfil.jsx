import { useObtenerParticipante } from "../../Hooks/useObtenerParticipante";

const TarjetaPerfil = ({ idCowboy }) => {
  const { participante } = useObtenerParticipante(idCowboy);
  if (participante)
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
                  Nombre: {participante.nombre}
                  <span className="numeros badge float-right">
                    {participante.total}
                  </span>
                </h5>
                <h5 className="fondoNav card-text">
                  Titulos totales:{" "}
                  {participante.titulos ? participante.titulos.length : 0}
                </h5>
                <div>
                  <p className="titulosObtenidos fondoNav">
                    Titulos:{" "}
                    {participante.titulos ? participante.titulos.join(", ") : 0}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TarjetaPerfil;
