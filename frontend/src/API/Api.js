import axios from "axios";
const api = axios.create();

const baseUrl = import.meta.env.DEV ? "https://thecowboys.one" : "";
const token   = import.meta.env.VITE_JWT;

console.log("URL", baseUrl);

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

// -------El día del más tonto-------

// ----Mostrar:
// Mostrar nombres de los participantes
export async function obtenerNombres() {
  const resp = await api.get(`${baseUrl}/api/tontos`);
  return resp.data;
}

// Mostrar títulos
export async function getTitulos(idCowboy) {
  const resp = await api.get(
    `${baseUrl}/api/cowboys/${idCowboy}/titulos`
  );
  return resp.data;
}

// Mostrar Tonto del día
export async function obtenerTonto() {
  const resp = await api.get(`${baseUrl}/api/tontos/hoy`);
  return resp.data;
}

// Obtener Tonto por ID Participante
export async function obtenerTontoId(idCowboy) {
  const resp = await api.get(
    `${baseUrl}/api/tontos/${idCowboy}`
  );
  return resp.data;
}

// ----Guardar:
// Guardar títulos
export async function postTitulos(idCowboy, data) {
  const resp = await api.post(
    `${baseUrl}/api/cowboys/${idCowboy}/titulos`,
    data,
    headers
  );
  return resp.data;
}

// ----Borrar:
// Borrar títulos
export async function deleteTitulos(idTitulo) {
  const resp = await api.delete(
    `${baseUrl}/api/titulos/${idTitulo}/`,
    headers
  );
  return resp.data;
}

// -------El cowboy del día-------

// ----Mostrar:
// Mostrar nombre del cowboy del día
export async function fetchCowboysToday() {
  const resp = await api.get(
    `${baseUrl}/api/cowboys/today`
  );
  return resp.data;
}

// -------Login-------

// Usuario y contraseña 🔐
export async function inicioSesion(sesion) {
  const respuesta = await api.post(
    `${baseUrl}/api/login`,
    sesion
  );
  return respuesta.data;
}

// Registro
export async function registro(reg) {
  const respuesta = await api.post(
    `${baseUrl}/api/registrar`,
    reg
  );
  return respuesta.data;
}

// -------Calendario-------

// ----Mostrar:
// Mostrar nombre en la fecha que salio
export async function obtenerTontosDelMes(inicio,fin) {
  const resp = await api.get(
    `https://thecowboys.duckdns.org/api/tontos/calendario?inicio=${inicio}Z&fin=${fin}Z`
    // ?inicio=2024-05-01T00:00:00.000Z&fin=2024-05-05T23:59:59.999Z
  );
  console.log("api2",resp)
  return resp.data;
}
