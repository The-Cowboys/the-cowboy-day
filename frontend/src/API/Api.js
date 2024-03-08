import axios from "axios";
const api = axios.create();

export default async function obtenerNombres() {
  const resp = await api.get("https://thecowboys.duckdns.org/api/cowboys");
  return resp.data;
}
