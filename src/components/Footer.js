import React from "react";
import "./Footer.css"; // Импорт файла со стилями

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Контактная информация:</p>
        <ul>
          <li>
            <a href="whatsapp://send?phone=+996701018312">Отправить сообщение в WhatsApp</a>
          </li>
          <li>
            <a href="tel:+996701018312">
              Телефон: +996701018312
            </a>
          </li>
          <li>Адрес: Улица, Ичке-Жергез, Страна: Кыргызстан</li>
          <li className="autor">Aden Istambekov Copyright © 2024 Aden Istambekov - All rights reserved || Designed By: KASEINOV</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
