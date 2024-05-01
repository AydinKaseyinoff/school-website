import React from "react";
import Navigation from "./Navigation";
import SchoolMap from "./SchoolMap";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Родительское собрание',
    start: new Date(2024, 4, 15, 10, 0), // Год, месяц (0-11), день, час, минуты
    end: new Date(2024, 4, 15, 12, 0),
  },
  {
    title: 'Выходной',
    start: new Date(2024, 4, 17),
    end: new Date(2024, 4, 17),
  },
  // Добавьте другие события по мере необходимости
];

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <ul>
            <Navigation />
        </ul>
      </header>
      <main>
        <section>
          <h2>Новости и объявления</h2>
          <p>Здесь будут новости и объявления школы.</p>
        </section>
        <section className="calendar-page">
          <h2>Календарь событий</h2>
          <Calendar className="calendar"
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500}}
          />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
