import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationSuccessful from './pages/RegistrationSuccessful';
import Welcome from './pages/Welcome';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage'; 
import ResetPasswordPage from './pages/ResetPasswordPage';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/register" element={<RegistrationPage />} />       
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration-successful" element={<RegistrationSuccessful />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
