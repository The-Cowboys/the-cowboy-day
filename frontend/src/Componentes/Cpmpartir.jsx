import { Link } from "react-router-dom";

const Cpmpartir = () => {
  return (
    <>
      <Link
        to="https://api.whatsapp.com/send?text=El tonto del dia es..."
        target="_blank"
      >
        <button type="button" className="btn btn-dark">
          whatsapp
        </button>
      </Link>
    </>
  );
};

export default Cpmpartir;
