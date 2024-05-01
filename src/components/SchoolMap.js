import React from 'react';
import Navigation from './Navigation';

const SchoolMap = () => {
  return (
    <div>
      <header className="header">
        <ul>
            <Navigation />
        </ul>
      </header>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14682.167175338234!2d78.70848442830302!3d42.544772377111315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3887ab81323ccd1d%3A0xb4666dac2d337bf2!2z0JjRh9C60LUt0JbQtdGA0LPQtdC3INCc0LXQutGC0LXQsdC4!5e1!3m2!1sky!2skg!4v1714497353463!5m2!1sky!2skg"
      width="100%"
      height="450"
      title="Школьная карта"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  );
};

export default SchoolMap;
