import React from "react";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <h1>📅 My Schedule</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Hour</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday </th>
            <th>Sunday </th>
          </tr>
        </thead>
        <tbody>{generateScheduleRows()}</tbody>
      </table>
    </div>
  );
};

const generateScheduleRows = () => {
  const hours = [
    "7:00 AM",
    "8:30 AM",
    "9:00 AM",
    "10:30 AM",
    "11:00 AM",
    "12:30 PM",
    "1:00 PM",
    "2:30 PM",
    "3:00 PM",
    "4:30 PM",
    "5:00 PM",
    "6:30 PM",
    "7:00 PM",
    "8:30 PM",
    "9:00 PM",
  ];

  const schedule = {
    Lunes: {
      "7:00 AM": "mineria",
      "8:30 AM": "mineria",
      "1:00 PM": "lab_micro",
      "2:30 PM": "lab_micro",
      "3:00 PM": "microcomputadoras",
      "4:30 PM": "microcomputadoras",
      "5:00 PM": "redes",
      "6:30 PM": "redes",
    },
    Martes: {
      "7:00 AM": "arquitectura",
      "8:30 AM": "arquitectura",
      "9:00 AM": "sistemas",
      "10:30 AM": "sistemas",
      "5:00 PM": "redes",
      "6:30 PM": "redes",
    },
    Miércoles: {
      "7:00 AM": "mineria",
      "8:30 AM": "mineria",
      "3:00 PM": "microcomputadoras",
      "4:30 PM": "microcomputadoras",
    },
    Jueves: {
      "7:00 AM": "arquitectura",
      "8:30 AM": "arquitectura",
      "9:00 AM": "sistemas",
      "10:30 AM": "sistemas",
      "5:00 PM": "redes",
      "6:30 PM": "redes",
    },
    Viernes: {
      "3:00 PM": "lab_redes",
      "4:30 PM": "lab_redes",
      "5:00 PM": "lab_redes",
    },
    Sabado: {},
    Domingo: {
      "9:00 AM": "frances",
      "10:30 AM": "frances",
    },
  };

  return hours.map((hour, index) => (
    <tr key={index}>
      <td>{hour}</td>
      {[
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
      ].map((day) => (
        <td key={day} className={schedule[day]?.[hour] || ""}>
          {schedule[day]?.[hour] ? formatClassName(schedule[day][hour]) : ""}
        </td>
      ))}
    </tr>
  ));
};

// Función para formatear los nombres de las clases
const formatClassName = (className) => {
  const formattedNames = {
    mineria: "Data Mining",
    arquitectura: "Client Server Architecture",
    sistemas: "Distributed Systems",
    redes: "Secure Data Networks",
    lab_redes: "Secure Data Networks Laboratory",
    lab_micro: "Microcomputer Laboratory",
    microcomputadoras: "Microcomputer",
    frances: "French",
  };
  return formattedNames[className] || "";
};

export default Schedule;
