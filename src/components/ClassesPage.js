// src/components/ClassesPage.js

import React, { useState } from "react";
import Modal from "react-modal";
import Navigation from "./Navigation";

const ClassesPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleClassSelect = (classNumber) => {
    setSelectedClass(classNumber);
    setModalIsOpen(false);
  };

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
      <h1>Выберите класс</h1>
      <button className="set_class" onClick={openModal}>
        Выбрать класс
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Выберите класс"
      >
        <h2 className="set_class">Выберите класс</h2>
        <button onClick={() => handleClassSelect(0)} className="set_class">0</button>
        <button onClick={() => handleClassSelect(1)} className="set_class">1</button>
        <button onClick={() => handleClassSelect(2)} className="set_class">2</button>
        <button onClick={() => handleClassSelect(3)} className="set_class">3</button>
        <button onClick={() => handleClassSelect(4)} className="set_class">4</button>
        <button onClick={() => handleClassSelect(5)} className="set_class">5</button>
        <button onClick={() => handleClassSelect(6)} className="set_class">6</button>
        <button onClick={() => handleClassSelect(7)} className="set_class">7</button>
        <button onClick={() => handleClassSelect(8)} className="set_class">8</button>
        <button onClick={() => handleClassSelect(9)} className="set_class">9</button>
        <button onClick={() => handleClassSelect(10)} className="set_class">10</button>
        <button onClick={() => handleClassSelect(11)} className="set_class">11</button>
        <button onClick={closeModal}>Отмена</button>
      </Modal>
      {selectedClass !== null && <p>Вы выбрали класс: {selectedClass}</p>}
    </div>
  );
};

export default ClassesPage;