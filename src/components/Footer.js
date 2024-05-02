import React from "react";
import "./Footer.css"; // Импорт файла со стилями

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Контактная информация:</p>
        <ul>
          <li>Email: aidin090407@icloud.com</li>
          <li>Телефон: +996701018312</li>
          <li>Адрес: Улица, Ичке-Жергез, Страна: Кыргызстан</li>
          <li className="autor">Aden Istambekov Copyright © 2024 Aden Istambekov - All rights reserved || Designed By: KASEINOV</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
