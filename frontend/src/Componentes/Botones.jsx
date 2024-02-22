import { Link } from "react-router-dom";

const Botones = ({ button }) => {
  return (
    <>
      <Link to={button.ruta}>
        <button type="button" className="btn btn-dark">
          {button.infBoton}
        </button>
      </Link>
    </>
  );
};

export default Botones;
