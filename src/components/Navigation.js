// src/components/Navigation.js

import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <h1 className="logo">Аден Истамбеков</h1>
      </ul>
      <ul>
        <li>
          <Link to="/" className="set_class">
            Главная
          </Link>
        </li>
        <li>
          <Link to="/classes" className="set_class">
            Выбор класса
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
