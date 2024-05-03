import React from "react";

const TeacherCard = ({ image, name, experience, subject, contact }) => {
  return (
    <div className="teacher-card">
      <div className="teacher-item">
        <img src={image} alt={name} className="teacher-image" />
        <div className="teacher-info">
          <h3>{name}</h3>
          <p>Стаж работы: {experience}</p>
          <p>Предмет: {subject}</p>
          <p>Контакты: {contact}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
