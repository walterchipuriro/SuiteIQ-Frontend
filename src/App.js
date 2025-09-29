import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
