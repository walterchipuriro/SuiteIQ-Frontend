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
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const nationalIdRegex = /^\d{2}-\d{7}[A-Z]\d{2}$/;
    const phoneRegex = /^07\d{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const today = new Date();
    const dobDate = new Date(dateOfBirth);

    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!username.trim()) newErrors.username = "Username is required";
    if (!dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    else if (dobDate > today) newErrors.dateOfBirth = "Date of birth cannot be in the future";

    if (!nationalIdRegex.test(nationalId)) {
      newErrors.nationalId = "Format must be like 12-3456789Z01";
    }

    if (!homeAddress.trim()) newErrors.homeAddress = "Home address is required";
    if (!role) newErrors.role = "Role is required";

    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Phone must follow format 0776603934";
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

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
        setErrors({});
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
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={errors.fullName ? 'error' : ''}
                  required
                />
                {errors.fullName && <div className="error-msg">{errors.fullName}</div>}
              </div>
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={errors.username ? 'error' : ''}
                  required
                />
                {errors.username && <div className="error-msg">{errors.username}</div>}
              </div>
              <div>
                <label>Date of Birth:</label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className={errors.dateOfBirth ? 'error' : ''}
                  required
                />
                {errors.dateOfBirth && <div className="error-msg">{errors.dateOfBirth}</div>}
              </div>
              <div>
                <label>National ID:</label>
                <input
  type="text"
  value={nationalId}
  onChange={(e) => setNationalId(e.target.value)}
  className={errors.nationalId ? 'error' : ''}
  required
  placeholder="63-34567X48"  
/>

                {errors.nationalId && <div className="error-msg">{errors.nationalId}</div>}
              </div>
              <div>
                <label>Home Address:</label>
                <input
                  type="text"
                  value={homeAddress}
                  onChange={(e) => setHomeAddress(e.target.value)}
                  className={errors.homeAddress ? 'error' : ''}
                  required
                />
                {errors.homeAddress && <div className="error-msg">{errors.homeAddress}</div>}
              </div>
            </div>

            <div className="form-column">
              <div>
                <label>Role:</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={errors.role ? 'error' : ''}
                  required
                >
                  <option value="" disabled hidden>Select a role</option>
                  <option value="Front Desk Agent">Front Desk Agent</option>
                  <option value="Room Attendant">Room Attendant</option>
                  <option value="Waiter">Waiter</option>
                  <option value="Hotel Manager">Hotel Manager</option>
                  <option value="Security Guard">Security Guard</option>
                </select>
                {errors.role && <div className="error-msg">{errors.role}</div>}
              </div>
              <div>
                <label>Phone:</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={errors.phone ? 'error' : ''}
                  required
                />
                {errors.phone && <div className="error-msg">{errors.phone}</div>}
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? 'error' : ''}
                  required
                />
                {errors.email && <div className="error-msg">{errors.email}</div>}
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? 'error' : ''}
                  required
                />
                {errors.password && <div className="error-msg">{errors.password}</div>}
              </div>
              <div>
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={errors.confirmPassword ? 'error' : ''}
                  required
                />
                {errors.confirmPassword && <div className="error-msg">{errors.confirmPassword}</div>}
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
