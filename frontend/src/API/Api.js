import axios from "axios";
const api = axios.create();

const token = import.meta.env.VITE_JWT

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export default async function obtenerNombres() {
  const resp = await api.get("https://thecowboys.duckdns.org/api/cowboys");
  return resp.data;
}

export async function getTitulos(idCowboy) {
  const resp = await api.get(
    `https://thecowboys.duckdns.org/api/cowboys/${idCowboy}/titulos`
  );
  return resp.data;
}

export async function postTitulos(idCowboy, data) {
  const resp = await api.post(
    `https://thecowboys.duckdns.org/api/cowboys/${idCowboy}/titulos`,
    data,
    headers
  );
  return resp.data;
}

export async function deleteTitulos(idTitulo) {
  const resp = await api.delete(
    `https://thecowboys.duckdns.org/api/titulos/${idTitulo}/`,
    headers
  );
  return resp.data;
}
