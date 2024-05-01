import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <h1 className="logo">Аден Истамбеков</h1>
      </ul>
      <ul>
        <li className="ul-nav">
          <NavLink exact to="/" className="set_class" activeClassName="active">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/classes" className="set_class" activeClassName="active">
            Выбор класса
          </NavLink>
        </li>
        {/* Добавляем кнопку для открытия галереи школы */}
        <li>
          <NavLink to="/gallery" className="set_class" activeClassName="active">
            Галерея школы
          </NavLink>
        </li>
        <li>
          <NavLink to="/map" className="set_class" activeClassName="active">
            О нас
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
