import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Componentes/EstilosGenerales.css";
import "./Componentes/NavBar/EstilosNavBar.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
