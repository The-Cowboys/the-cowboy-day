import React from "react";
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from "./NavBar";
import Contacto from "./Contacto";

const Estructura = () => {
  return (
    <>
      <NavBar />
      <Contacto />
    </>
  );
}

export default Estructura;