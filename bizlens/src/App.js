// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './styles.css';

function Homepage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1 className="homepage-title">How Successful Is Your Startup?</h1>
        <p className="homepage-subtitle">
          Assess your startup's potential with our AI-powered evaluation tool.
        </p>
        <button className="homepage-button" onClick={handleStart}>
          Start Evaluation
        </button>
      </div>
    </div>
  );
}

function PlaceholderQuiz() {
  return (
    <div className="homepage">
      <h1>Quiz Page Placeholder</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<PlaceholderQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;