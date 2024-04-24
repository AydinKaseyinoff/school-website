// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // заменим Route на Routes
import "./App.css";
import HomePage from "./components/HomePage";
import ClassesPage from "./components/ClassesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/* заменим Route на Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
        </Routes> {/* заменим Route на Routes */}
      </Router>
    </div>
  );
}

export default App;
