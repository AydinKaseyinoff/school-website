import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ClassesPage from "./components/ClassesPage";
import Gallery from "./components/Gallery";
import TeachersPage from "./components/TeachersPage"; // Импортируем TeachersPage компонент

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/teacher" element={<TeachersPage />} />
          {/* Отображение TeachersPage компонента */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

