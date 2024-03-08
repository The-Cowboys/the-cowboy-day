import { useReducer, useRef } from "react";

const ListaTitulos = () => {
  const inputRef = useRef();

  const [tasks, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "add_task": {
        return [...state, { id: state.length, titel: action.titel }];
      }
      case "remove_tasl": {
        return state.filter((task, index) => index != action.index);
      }
      default: {
        return state;
      }
    }
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();
    dispatch({
      type: "add_task",
      titel: inputRef.current.value,
    });
  };

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
            tasks.map((task, index) => (
              <div className="task" key={index}>
                <ul className="list-group lista fondoNav">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {task.titel}
                    <div className=" fondoNav">
                      <button
                        className="btn btn-dark"
                        onClick={() => dispatch({ type: "remove_tasl", index })}
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
