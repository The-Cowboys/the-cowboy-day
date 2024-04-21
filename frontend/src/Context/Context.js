import { createContext, useContext } from "react";

export const TContext = createContext();

export const useEstadoGlobal = () => useContext(TContext);
