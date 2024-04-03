import { useCowboyDelDia } from "../../../Hooks/useCowboyDelDia";

const CowboyDelDiaBoton = () => {
  const { cowboy, clicked, click } = useCowboyDelDia();

  return (
    <div className="cowboyDelDia">
      {!clicked ? (
        <button className="btn btn-dark" onClick={click}>
          ¿Quien es el Cowboy del día?
        </button>
      ) : (
        <div>
          <p>El cowboy de hoy es....</p>
          <h2>{cowboy}</h2>
        </div>
      )}
    </div>
  );
};

export default CowboyDelDiaBoton;
