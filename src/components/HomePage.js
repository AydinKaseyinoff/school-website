// src/components/HomePage.js

import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const HomePage = () => {
  return (
    <div>
      <header className="header">
        <ul>
          <h1>Добро пожаловать в нашу школу</h1>
          <h1>Адена Истамбекова</h1>
        </ul>
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
          <p>Здесь будет календарь событий школы.</p>
        </section>
        <section>
          <h2>Выбор класса</h2>
          <p>Нажмите на кнопку ниже, чтобы выбрать класс.</p>
          <Link to="/classes" className="set_class">
            Выбрать класс
          </Link>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
