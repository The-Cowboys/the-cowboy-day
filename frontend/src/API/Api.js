import axios from "axios";
const api = axios.create();

const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9yZ2UiLCJpYXQiOjE3MDk0MjE4MDUsImV4cCI6MTcxMDAyNjYwNX0.QtparKNYCN7EmvQXE70eQ0keeuJcCmzXIPoCIN1SShA",
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
