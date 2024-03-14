import { useEffect, useState } from "react";
import { deleteTitulos, getTitulos, postTitulos } from "../../API/Api";

/*

Que muestra mi pantalla?
 - Input para ingresar titulo
 - Lista que muestra los titulo
 - Boton que guarda el titulo
 - Botones de borrar

Variables del estado:
 - Estado para el input
 - Estado para la lista de titulos

Acciones de la pantalla:
 - Borrar un titulo
 - Crear un titulo
 - Mostrar todos los titulos


 Pasos:
 1. declarar los estados
 2. asociar los estado al HTML
 3. hacer una funcion para cada accion
*/

const ListaTitulos = ({ idCowboy }) => {
  // Estados
  const [input, setInput] = useState("");
  const [titulos, setTitulos] = useState([]);

  // Hooks
  useEffect(() => {
    mostrarTitulo();
  }, []);

  // Acciones
  const mostrarTitulo = async () => {
    // llamar a la api de obtener
    const lista = await getTitulos(idCowboy);
    setTitulos(lista);
  };

  const crearTitulo = async () => {
    // llamar a la api de crear
    const titulo = {
      titulo: input,
    };
    const tituloCreado = await postTitulos(idCowboy, titulo);

    const nuevaLista = [...titulos, tituloCreado];
    setTitulos(nuevaLista);
    setInput("");
  };

  const borrarTitulo = async (id) => {
    // llamar a la api de borrar
    await deleteTitulos(id);

    const listaBorrada = titulos.filter((titulo) => titulo.id != id);
    setTitulos(listaBorrada);
  };

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
