import { useEffect, useReducer, useRef } from "react";
import { deleteTitulos, getTitulos, postTitulos } from "../../API/Api";

const ListaTitulos = ({ idCowboy }) => {
  const inputRef = useRef();

  const [tasks, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "mostrar": {
        return action.titulos;
      }
      case "add_task": {
        return [...state, action.titulo];
      }
      case "remove_tasl": {
        return state.filter((task) => task.id != action.id);
      }
      default: {
        return state;
      }
    }
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();
    // Crea el objeto titulo que necesita la api
    const titulo = {
      "titulo": inputRef.current.value
    };

    const enviar = async () => {
      // llamara a la API post titulo
      const tituloObjeto = await postTitulos(idCowboy, titulo);

      // mandar el nuevo titulo al estado usando el dispatch
      dispatch ({
        type: "add_task",
        titulo: tituloObjeto
      });

      // limpia el texto escrito en el input
      inputRef.current.value = null;
    }
    enviar();
  };

  const cargarTitulos = () => {
    const fetchData = async () => {
      const titulos = await getTitulos(idCowboy);
      dispatch({
        type: "mostrar",
        titulos: titulos,
      });
    };
    fetchData();
  };

  useEffect(() => {
    cargarTitulos();
  }, []);

  return (
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="tituloEnTexto"
            name="description"
            placeholder="Titulo nuevo"
            ref={inputRef}
          />
          <input type="submit" value="Agregar" className="btn btn-dark" />
        </form>
        <div className="task">
          {tasks &&
            tasks.map((titulo) => (
              <div className="task" key={titulo.id}>
                <ul className="list-group lista fondoNav">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {titulo.titulo}
                    <div className=" fondoNav">
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          deleteTitulos(titulo.id);
                          dispatch({ type: "remove_tasl", id: titulo.id });
                        }}
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
