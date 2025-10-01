import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Elegant Navbar with navigation */}
      <div className="navbar">
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={() => navigate('/login')}>Login</button>
       <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
  Contact
</button>

      </div>

      <div className="main-content">
        <h1>Welcome to SuiteIQ</h1>
        <p>
          Nestled in the vibrant heart of Harare’s Central Business District, our hotel is a sanctuary of sophistication and world-class hospitality. Renowned as Zimbabwe’s most luxurious destination, we offer an exquisite fusion of elegance, comfort, and modernity — a place where royalty meets refinement.
        </p>

        <h2> The Gold Standard in Hospitality</h2>
        <p>
          From opulent suites overlooking the city skyline to impeccable butler service and gourmet fine dining, our hotel redefines indulgence. Whether you're visiting for business or leisure, expect nothing less than a 5-star experience crafted to perfection.
        </p>

        <ul>
          <li> High-speed Wi-Fi throughout the property</li>
          <li> 24/7 concierge & room service</li>
          <li> Presidential suites with panoramic views</li>
          <li> Michelin-inspired dining experiences</li>
          <li> Rooftop pool and exclusive spa</li>
          <li> Private airport transfers & VIP chauffeur services</li>
        </ul>

        <h2>Why Choose SuiteIQ?</h2>
        <p>
          With SuiteIQ, managing hotel operations becomes a seamless affair. Our state-of-the-art hotel management system ensures optimized bookings, efficient staff coordination, and personalized guest services — all at your fingertips. Let your staff focus on guest satisfaction while SuiteIQ handles the rest.
        </p>



        <div id="contact" className="contact-section">
          <h2>📞 Contact Us</h2>
          <p><strong> Hotel Name:</strong> The Royal Crescent </p>
          <p><strong> Address:</strong> 15 Samora Machel Avenue, Harare CBD, Zimbabwe</p>
          <p><strong> Email:</strong> reservations@suiteiq.co.zw</p>
          <p><strong> Phone:</strong> +263 8677 000 123 | +263 77 123 4567</p>
          <p><strong> Website:</strong> <a href="https://www.suiteiq.co.zw" target="_blank" rel="noreferrer">www.suiteiq.co.zw</a></p>
          <p><strong> Socials:</strong> @SuiteIQHarare on Facebook, Instagram & Twitter</p>
        </div>

                <button className="back-button" onClick={() => navigate('/')}>
          Back
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
