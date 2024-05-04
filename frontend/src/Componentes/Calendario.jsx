import { Calendar, dayjsLocalizer } from "react-big-calendar";
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

  const events = [
    {
      start: dayjs("2024-05-09").toDate(),
      end: dayjs("2024-05-11").toDate(),
      title: "Prueba 1",
    },
    {
      start: dayjs("2024-05-22").toDate(),
      end: dayjs("2024-05-22").toDate(),
      title: "Prueba 2",
    },
    {
      start: dayjs("2024-06-22").toDate(),
      end: dayjs("2024-06-22").toDate(),
      title: "Prueba 3",
    },
  ];

  return (
    <>
      <div className="calendarioTamaño">
        <Calendar
          localizer={localizar}
          messages={messages}
          views={["month"]}
          events={events}
        />
      </div>
    </>
  );
};

export default Calendario;
