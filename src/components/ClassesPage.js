// src/components/ClassesPage.js

import React, { useState } from "react";
import Modal from "react-modal";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const studentsData = {
  0: ["Иванов", "Петров", "Сидоров"],
  1: ["Смирнова", "Иванова", "Кузнецова"],
  2: ["Козлов", "Лебедев", "Новиков"],
  3: ["Морозова", "Новикова", "Орлова"],
  4: ["Борисов", "Куликов", "Поляков"],
  5: ["Киселев", "Макаров", "Федоров"],
  6: ["Маркова", "Семенова", "Григорьева"],
  7: ["Карпов", "Артемьев", "Гусев"],
  8: ["Воробьева", "Лазарева", "Тимофеева"],
  9: ["Степанов", "Савельев", "Тихонов"],
  10: ["Андреев", "Михайлов", "Алексеев"],
  11: ["Абдымуратов Жаныбек", "Уланова Айзада", "Абдраимова Каныкей","Алмабеков Эржигит","Акылбекова Азиза", "Жунушалиев Байель","Сыргаков Арсен","Касейинов Айдин", "Мукашева Малика","Кулбаракова Айдана","Мундузова Айдана","Турдубекова Жаркын","Кутманова Нурзада","Чокотаева Байель","Омурзаков Мадияр","Урматбеков Алмаз","Эмилбаев Байель","Русланов Актан","Толонова Нуркыз"],
};

const ClassesPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [students, setStudents] = useState([]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleClassSelect = (classNumber) => {
    setSelectedClass(classNumber);
    setStudents(studentsData[classNumber]);
    setModalIsOpen(false);
    toast.info(`Выбран класс ${classNumber}`);
  };
  

  return (
    <div>
      <header className="header">
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
      {selectedClass !== null && (
        <div className="list-class">
          <h2>Список учеников {selectedClass} класса:</h2>
          <ul>
            {students.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </div>
      )}
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default ClassesPage;
