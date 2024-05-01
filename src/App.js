import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ClassesPage from "./components/ClassesPage";
import Gallery from "./components/Gallery"; // импорт Gallery компонента
import SchoolMap from "./components/SchoolMap";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/map" element={<SchoolMap />} />
           {/* отображение Gallery компонента */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

