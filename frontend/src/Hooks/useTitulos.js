import { useEffect, useState } from "react";
import { deleteTitulos, getTitulos, postTitulos } from "../API/Api";

const useTitulos = (idCowboy) => {
  // Estados
  const [input, setInput] = useState("");
  const [titulos, setTitulos] = useState([]);
  const [error, setError] = useState(false);

  // Hooks
  useEffect(() => {
    mostrarTitulos();
  }, []);

  // Acciones
  const mostrarTitulos = async () => {
    // Llamar a la API para obtener los títulos
    const lista = await getTitulos(idCowboy);
    setTitulos(lista);
  };

  const crearTitulo = async () => {
    // Llamar a la API para crear un nuevo título
    const titulo = {
      titulo: input,
    };
    try {
      const tituloCreado = await postTitulos(idCowboy, titulo);
      const nuevaLista = [...titulos, tituloCreado];
      setTitulos(nuevaLista);
      setError(false);
    } catch (err) {
      setError(true);
      console.log("Hubo un error!!!!!");
    }
    setInput("");
  };

  const borrarTitulo = async (id) => {
    // Llamar a la API para borrar un título
    await deleteTitulos(id);
    const listaBorrada = titulos.filter((titulo) => titulo.id != id);
    setTitulos(listaBorrada);
  };

  return {
    borrarTitulo,
    crearTitulo,
    error,
    titulos,
    setInput,
    input,
  };
};

export default useTitulos;
