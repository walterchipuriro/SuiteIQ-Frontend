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
     <div className="success-box"></div>
  <h1>Registration Successful!</h1>
  <p>Your account has been created successfully.</p>
  <button onClick={handleGoToLogin}>Go to Login</button>
</div>


  );
}

export default RegistrationSuccessful;
