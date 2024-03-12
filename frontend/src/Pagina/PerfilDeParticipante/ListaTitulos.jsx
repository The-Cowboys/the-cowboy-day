import { useEffect, useReducer, useRef } from "react";
import { deleteTitulos, getTitulos, postTitulos } from "../../API/Api";
//recibir ID del Cowoboy
const ListaTitulos = ({ idCowboy }) => {
  const inputRef = useRef();

  const [tasks, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "mostrar": {
        return action.titulos;
      }
      case "add_task": {
        return [...state, { id: state.length, titel: action.titel }];
      }
      case "remove_tasl": {
        return state.filter((task, id) => id != action.id);
      }
      default: {
        return state;
      }
    }
  });
  
  const handleSubmit = (evento) => {
    //llamara a la API post titulo
    const titulo = inputRef.current.value;
    console.log(idCowboy);
    postTitulos(idCowboy, titulo);
    evento.preventDefault();
    dispatch({
      type: "add_task",
      titel: inputRef.current.value,
    });
    inputRef.current.value = null;
  };

  useEffect(() => {
    const fetchData = async () => {
      const titulos = await getTitulos(1);
      dispatch({
        type: "mostrar",
        titulos: titulos,
      });
    };
    fetchData();
  }, [dispatch]);

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
            tasks.map((task, id) => (
              <div className="task" key={id}>
                <ul className="list-group lista fondoNav">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {task.titulo}
                    <div className=" fondoNav">
                      <button
                        className="btn btn-dark"
                        onClick={() => {
                          deleteTitulos(id);
                          dispatch({ type: "remove_tasl", id });
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
