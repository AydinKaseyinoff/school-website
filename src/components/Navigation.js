import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logo.jpg";
import "./Navigation.css";
import SignInWithGoogle from "./SignInWithGoogle";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <h1 className="logo">
          <img src={logo} alt="Мое изображение" />
          <h1>
            Аден Истамбеков
          </h1>
        </h1>
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
          <NavLink to="/teacher" className="set_class" activeClassName="active">
            Учителя
          </NavLink>
        </li>
        <li>
          <SignInWithGoogle />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
