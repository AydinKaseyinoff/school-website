// src/components/HomePage.js

import React from "react";
import Navigation from "./Navigation";
import SchoolMap from "./SchoolMap";

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
          <p>Здесь будет календарь событий школы.</p>
        </section>
        <section>
          <h2>Вы можете нас найти👇</h2>
          <SchoolMap />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
