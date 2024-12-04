import { format } from "@formkit/tempo";
import "./dates.css";

const dateUpdate: Date = new Date();

// These are the same:
const updateDate = format(dateUpdate, "full");
// format(date, { date: "full" });

// format(date, "long");
// format(date, "medium");
// format(date, "short");

// // With an explicit locale:
// format(date, "full");

const Dates = () => {
  return (
    <div className="date-container">
      <p className="titleDate">Hoy es</p>
      <div className="calendar">{updateDate}</div>
      <span className="calendar-right">Calendario Para renderizar</span>
    </div>
  );
};

export { Dates };
