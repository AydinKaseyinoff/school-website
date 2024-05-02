import React from "react";
import Navigation from "./Navigation";
import moment from 'moment';
import "./HomePage.css"; // Импортируем файл со стилями
import Footer from "./Footer";

const events = [
  {
    title: 'Майские праздники',
    date: '2024-05-15',
    time: '10:00',
  },
  {
    title: 'Линейка',
    date: '2024-05-17',
    time: null,
  },
  // Добавьте другие события по мере необходимости
];

const formatDate = (date) => {
  return moment(date).format('MMMM D, YYYY');
};

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
        <section>
          <h2>Календарь событий</h2>
          <div className="calendar">
            {events.map((event, index) => (
              <div key={index} className="event">
                <div className="date">{formatDate(event.date)}</div>
                <div className="title">{event.title}</div>
                {event.time && <div className="time">{event.time}</div>}
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;

