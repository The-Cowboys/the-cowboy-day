import useTitulos from "../../Hooks/useTitulos";

const ListaTitulos = ({ idCowboy }) => {
  // Utilizamos el hook useTitulos
  const { borrarTitulo, crearTitulo, error, titulos, setInput, input } = useTitulos(idCowboy);

  return (
    <>
      <div>
        <div className="form">
          <input
            type="text"
            className="tituloEnTexto"
            name="description"
            placeholder="Titulo nuevo"
            value={input}
            onChange={(input) => setInput(input.target.value)}
          />
          <input
            onClick={crearTitulo}
            type="submit"
            value="Agregar"
            className="btn btn-dark"
          />
        </div>
        <div>
          {error == true && (
            <p className="error">No se puede duplicar el titulo</p>
          )}
        </div>
        <div className="task">
          {titulos &&
            titulos.map((titulo) => (
              <div className="task" key={titulo.id}>
                <ul className="list-group lista fondoNav">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {titulo.titulo}
                    <div className="fondoNav">
                      <button
                        className="btn btn-dark"
                        onClick={() => borrarTitulo(titulo.id)}
                      >
                        Borrar
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ListaTitulos;
