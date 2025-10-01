import React from 'react';
import './RegistrationPage.css';

function RegistrationPage() {
  return (
    <div className="register-container">
      <div className="register-form">

        <h1>Worker Registration</h1>
        <form>
          <div>
            <label>Full Name:</label>
            <input type="text" name="fullName" />
          </div>
          <div>
            <label>Role:</label>
            <input type="text" name="role" placeholder="e.g. Receptionist, Manager" />
          </div>
          <div>
            <label>Phone:</label>
            <input type="tel" name="phone" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
