import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationSuccessful.css'; 

function RegistrationSuccessful() {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
  <div className="success-container">
     <div className="success-box">
  <h1>Registration Successful!</h1>
  <p>Your account has been created successfully.</p>
  <button onClick={handleGoToLogin}>Login</button>
  </div>
</div>


  );
}

export default RegistrationSuccessful;
