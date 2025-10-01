import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.css';

function RegistrationPage() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const workerData = {
      fullName,
      username,
      dateOfBirth,
      nationalId,
      homeAddress,
      role,
      email,
      phone,
      password,
    };

    try {
      const response = await fetch("http://localhost:8081/api/workers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workerData),
      });

      if (response.ok) {
        // Clear form fields
        setFullName('');
        setUsername('');
        setDateOfBirth('');
        setNationalId('');
        setHomeAddress('');
        setRole('');
        setPhone('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');


        // Navigate to registration successful page
        navigate('/registration-successful');
      } else {
        const errorText = await response.text();
        alert("Error: " + errorText);
      }
    } catch (error) {
      alert("Failed to connect to backend: " + error.message);
    }
  };


   return (
    <div className="register-container">
      <div className="register-form">
        <h1>Worker Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-column">
              <div>
                <label>Full Name:</label>
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
              <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div>
                <label>Date of Birth:</label>
                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
              </div>
              <div>
                <label>National ID:</label>
                <input type="text" value={nationalId} onChange={(e) => setNationalId(e.target.value)} required />
              </div>
              <div>
                <label>Home Address:</label>
                <input type="text" value={homeAddress} onChange={(e) => setHomeAddress(e.target.value)} required />
              </div>
            </div>

            <div className="form-column">
              <div>
                <label>Role:</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                  <option value="" disabled hidden>Select a role</option>
                  <option value="Front Desk Agent">Front Desk Agent</option>
                  <option value="Room Attendant">Room Attendant</option>
                  <option value="Waiter">Waiter</option>
                  <option value="Hotel Manager">Hotel Manager</option>
                  <option value="Security Guard">Security Guard</option>
                </select>
              </div>
              <div>
                <label>Phone:</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
            </div>
          </div>

          <div className="button-group">
            <button type="submit" className="primary-button">Register</button>
            <button type="button" className="primary-button" onClick={() => navigate(-1)}>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
