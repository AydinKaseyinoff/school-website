import React from "react";
import TeacherCard from "./TeacherCard"; // Импортируем компонент TeacherCard
import teacher1 from "./teach-img/teacher1.jpg";
import teacher2 from "./teach-img/teacher2.jpg";
import teacher3 from "./teach-img/teacher3.jpg";
import teacher4 from "./teach-img/teacher4.jpg";
import teacher5 from "./teach-img/teacher5.jpg";
import teacher6 from "./teach-img/teacher6.jpg";
import teacher7 from "./teach-img/teacher7.jpg";
import "./TeachersPage.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

const TeachersPage = () => {
  return (
    <div className="teachers-page">
      <header className="header">
        <ul>
          <Navigation />
        </ul>
      </header>
      <h2>Наши учителя</h2>
      <TeacherCard
        image={teacher1}
        name="Исраилов Рыспек Таабалдиевич"
        experience="10 лет"
        subject="Кыргыз тил/Кыргыз Адабияты"
        contact="+996700999999"
      />
      <TeacherCard
        image={teacher2}
        name="Жасынжанов Тураржан"
        experience="5 лет"
        subject="Директор орун басары"
        contact="+996700999999"
      />
      <TeacherCard
        image={teacher3}
        name="Качаганова Жылдыз"
        experience="10 лет"
        subject="Тарбия завуч"
        contact="+996500031346"
      />
      <TeacherCard
        image={teacher4}
        name="Сыргаков Кыялбек"
        experience="10 лет"
        subject="соц Педагог"
        contact="+996700999999"
      />
      <TeacherCard
        image={teacher5}
        name="Джаналиева Айгул"
        experience="10 лет"
        subject="Орустил Мугалими"
        contact="+996700999999"
      />
      <TeacherCard
        image={teacher6}
        name="Отонбаева Анара"
        experience="10 лет"
        subject="Биология мугалими"
        contact="+996700999999"
      />
      <TeacherCard
        image={teacher7}
        name="Кожоканова Рыскул"
        experience="10 лет"
        subject="Кыргыз тил/Кыргыз Адабияты"
        contact="+996700999999"
      />
      {/* Добавьте другие карточки учителей при необходимости */}
      <Footer />
    </div>
  );
};

export default TeachersPage;
