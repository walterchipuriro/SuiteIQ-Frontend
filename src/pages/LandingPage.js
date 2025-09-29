  import './LandingPage.css'; //
  import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();


  return (
    <div className="landing-container">
      <div className="navbar">
        <button>Login</button>
        <button>Register</button>
        <button>Contact</button>
      </div>

      <div className="main-content">
        <h1>Welcome to SuiteIQ</h1>
        <p>
          SuiteIQ is your all-in-one hotel management system designed to simplify operations, enhance guest experience, and drive revenue. Whether you're a boutique hotel or a large chain, we provide the tools you need to manage bookings, staff, and services — all in one place.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li>Smart Booking & Reservation Management</li>
          <li>Real-time Staff Coordination</li>
          <li>Customizable Guest Services</li>
          <li>Analytics & Performance Insights</li>
        </ul>
        <h2>Why Choose Us?</h2>
        <p>
          We blend intuitive design with powerful features to give you the competitive edge in hospitality.
        </p>

        <button
          className="back-button"
          onClick={() => navigate(-1)}  // go back one step in history
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
