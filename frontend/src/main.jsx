import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Componentes/NavBar/EstilosNavBar.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
);
