import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
