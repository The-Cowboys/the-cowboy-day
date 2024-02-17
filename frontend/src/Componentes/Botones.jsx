import { Link } from "react-router-dom";

function Botones(props) {
  const { infBoton, ruta } = props;

  return (
    <Link to={ruta}>
      <button type="button" className="btn">
        {infBoton}
      </button>
    </Link>
  );
}

export default Botones;
