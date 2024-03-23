import axios from "axios";
const api = axios.create();

const token = import.meta.env.VITE_JWT;

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

// ----Mostrar:
// Mostrar nombres de los participantes
export default async function obtenerNombres() {
  const resp = await api.get("https://thecowboys.duckdns.org/api/cowboys");
  // console.log = ("10")
  return resp.data;
}

// Mostrar títulos
export async function getTitulos(idCowboy) {
  const resp = await api.get(
    `https://thecowboys.duckdns.org/api/cowboys/${idCowboy}/titulos`
  );
  console.log = ("11");
  return resp.data;
}

// Mostrar Tonto del día
export async function obtenerTonto() {
  const resp = await api.get(`https://thecowboys.duckdns.org/api/tontos/hoy`);
  console.log = ("1", resp);
  return resp.data;
}

// ----Guardar:
// Guardar títulos
export async function postTitulos(idCowboy, data) {
  const resp = await api.post(
    `https://thecowboys.duckdns.org/api/cowboys/${idCowboy}/titulos`,
    data,
    headers
  );
  console.log = ("12");
  return resp.data;
}

// ----Borrar:
// Borrar títulos
export async function deleteTitulos(idTitulo) {
  const resp = await api.delete(
    `https://thecowboys.duckdns.org/api/titulos/${idTitulo}/`,
    headers
  );
  console.log = ("13");
  return resp.data;
}
