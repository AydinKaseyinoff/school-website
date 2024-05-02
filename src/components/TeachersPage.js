import React from "react";
import TeacherCard from "./TeacherCard"; // Импортируем компонент TeacherCard
import teacher1 from "./teach-img/teacher1.jpg";
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
        image={teacher1}
        name="Жасынжанов Тураржан"
        experience="5 лет"
        subject="Кыргыз тил/Кыргыз Адабияты"
        contact="+996700999999"
      />
      <TeacherCard
        image={teacher1}
        name="Касымова Айнура"
        experience="10 лет"
        subject="Кыргыз тил/Кыргыз Адабияты"
        contact="+996700999999"
      />
      <TeacherCard
        image={teacher1}
        name="Мантекова Кундуз"
        experience="10 лет"
        subject="Кыргыз тил/Кыргыз Адабияты"
        contact="+996700999999"
      />
      <TeacherCard
        image={teacher1}
        name="Жаныш кызы Бегимай"
        experience="10 лет"
        subject="Кыргыз тил/Кыргыз Адабияты"
        contact="+996700999999"
      />
      <TeacherCard
        image={teacher1}
        name="Джумабаева Махабат Муптуевна"
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
