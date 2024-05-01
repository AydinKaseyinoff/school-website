import React from "react";
import Navigation from "./Navigation";
import image1 from "./img/image1.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <header className="header">
        <ul>
          <Navigation />
        </ul>
      </header>
      <h2>Галерея школы</h2>
      <div className="gallery-images">
        {/* Здесь можно добавить изображения для галереи школы */}
        <img src={image1} alt="Мое изображение" />
        {/* Дополнительные изображения */}
      </div>
    </div>
  );
};

export default Gallery;
