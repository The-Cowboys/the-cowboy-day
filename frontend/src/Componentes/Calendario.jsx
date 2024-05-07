import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { useState } from "react";
import { useEffect } from "react";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";

dayjs.locale("es");

const Calendario = () => {
  const localizar = dayjsLocalizer(dayjs);
  const messages = {
    today: "Hoy",
    previous: "Mes anterior",
    next: "Mes siguiente",
  };

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    // TODO: como carajo obtener el rango de fechas inicial en el calendario?
  }, []);

  const manejarCambioDeMes = (rango) => {
    obtenerTontosEntreFechas(rango.start, rango.end);
  };

  const obtenerTontosEntreFechas = (inicio, fin) => {
    console.log("Fecha inicio", inicio);
    console.log("Fecha fin", fin);

    // TODO 1: llamar a API para obtener el historial de tontos entre las dos fechas
    // TODO 2: al recibir la lista de tontos del dia, mapearla a un arreglo de eventos

    // ESTO ES UN EJEMPLO, GENERA NOMBRES ALEATOREOS
    // BORRAR
    const nombres = ["Jorge", "German", "Pablo", "Marcelo", "Cristian"];
    const eventos = Array.from({ length: 31 }, (_, i) => {
      return {
        start: dayjs(inicio).add(i, "day").toDate(),
        end: dayjs(inicio).add(i, "day").toDate(),
        title: nombres[Math.floor(Math.random() * nombres.length)],
      };
    });

    setEventos(eventos);
  };

  return (
    <>
      <div className="calendarioTamaño">
        <Calendar
          localizer={localizar}
          messages={messages}
          views={["month"]}
          events={eventos}
          onRangeChange={(rango) => manejarCambioDeMes(rango)}
        />
      </div>
    </>
  );
};

export default Calendario;
