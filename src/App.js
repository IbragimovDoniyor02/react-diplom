import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import StatisticsPage from './pages/StatisticsPage';
import MatchPage from './pages/MatchPage';
import FootballDataPage from './pages/FootballDataPage';
import PlayersPage from './pages/PlayersPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={HomePage} />
      <Route path="/login" element={LoginPage} />
      <Route path="/statistics" element={StatisticsPage} />
      <Route path="/match" element={MatchPage} />
      <Route path="/football-data" element={FootballDataPage} />
      <Route path="/players" element={PlayersPage} />
      </Routes> 
    </Router>
  );
}

export default App;
