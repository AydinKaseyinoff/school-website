import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./Navigation";
import moment from 'moment';
import "./HomePage.css"; // Импортируем файл со стилями
import Footer from "./Footer";
import ClassesPage from "./ClassesPage";

const events = [
  {
    title: 'Майские праздники',
    date: '2024-05-1',
    time: '10:00',
  },
  // Другие события...
];

const formatDate = (date) => {
  return moment(date).format('MMMM D, YYYY');
};

const HomePage = () => {
  // Показываем всплывающее уведомление при загрузке страницы
  useEffect(() => {
    toast.info("Добро пожаловать на наш сайт!");
  }, []);

  return (
    <div>
      <header className="header">
        <ul>
          <Navigation />
          <ClassesPage />
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
      <ToastContainer /> {/* Контейнер для всплывающих уведомлений */}
    </div>
  );
};

export default HomePage;


