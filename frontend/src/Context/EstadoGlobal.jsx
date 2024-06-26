import { useEffect, useState } from "react";
import { TContext } from "./Context";

const tokenSesion = () => {
  const obtenerToken = localStorage.getItem("token");
  const tokenn = JSON.parse(obtenerToken);
  return tokenn;
};

export const EstadoGlobal = ({ children }) => {
  const [token, setToken] = useState(null);
  console.log("token actual", token)

  useEffect(() => {
    setToken(tokenSesion());
  },[]);

  return (
    <TContext.Provider value={{ token, setToken }}>
      {children}
    </TContext.Provider>
  );
};
