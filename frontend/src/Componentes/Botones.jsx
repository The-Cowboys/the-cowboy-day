import { Link } from "react-router-dom";

const Botones = ({ button }) => {
  if (!button) {
    return;
  }

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

// function Botones(props) {
//   const { infBoton, ruta } = props;

//   return (
//     <Link to={ruta}>
//       <button type="button" className="btn">
//         {infBoton}
//       </button>
//     </Link>
//   );
// }

// export default Botones;
