import { useObtenerTonto } from "../../Hooks/useObtenerTonto";

const TarjetaTonta = () => {
  const { tonto } = useObtenerTonto();

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
            {tonto.map((user, index) => (
              <div className="fondoNav card-body" key={index}>
                <h5 className="nombre card-title">
                  {user.name}
                  <span className="badge float-right">75</span>
                </h5>
                <h6 className="fondoNav card-text">...</h6>
                <div>
                  <p className="titulosObtenidos fondoNav">......lol..</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarjetaTonta;
