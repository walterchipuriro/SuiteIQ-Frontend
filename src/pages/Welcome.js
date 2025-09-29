import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const navigate = useNavigate();

  const handleLandingPage = () => {
    navigate('/landing'); // Navigate to the LandingPage when the button is clicked
  };

  return (
    <div
      className="welcome-container"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '../background.jpeg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <img src="/suiteiq_logo.PNG" alt="SuiteIQ Logo" className="logo" />
      <h1>Welcome to the most luxurious Hotel</h1>
      <p>Stay Where the City Breathes</p>
      <div className="button-group">
        <button onClick={handleLandingPage}>Get Started</button>
      </div>
    </div>
  );
}

export default Welcome;
