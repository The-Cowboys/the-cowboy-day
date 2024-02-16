import "./EstilosElMasToto.css";
import TarjetaDia from "./Tarjetas/TarjetaDia";

const ListaElMasToto = () => {
  return (
    <>
      <section>
        <TarjetaDia />

        {/* Lista de participantes */}
        <h3 className="tituloH3">Lista de participantes</h3>
        <ol className="principal list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="logros ms-2 me-auto">
              <div className="nombre fw-bold">German</div>
              --Título más reciente.--
            </div>
            <span className="badge">87</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="logros ms-2 me-auto">
              <div className="nombre fw-bold">Cristian</div>
              --Título más reciente.--
            </div>
            <span className="badge">78</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="logros ms-2 me-auto">
              <div className="nombre fw-bold">Pablo</div>
              --Título más reciente.--
            </div>
            <span className="badge">75</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="logros ms-2 me-auto">
              <div className="nombre fw-bold">Franco</div>
              --Título más reciente.--
            </div>
            <span className="badge">75</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="logros ms-2 me-auto">
              <div className="nombre fw-bold">Marcelo</div>
              --Título más reciente.--
            </div>
            <span className="badge">68</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="logros ms-2 me-auto">
              <div className="nombre fw-bold">Jorge</div>
              --Título más reciente.--
            </div>
            <span className="badge">68</span>
          </li>
        </ol>
      </section>
    </>
  );
};

export default ListaElMasToto;
