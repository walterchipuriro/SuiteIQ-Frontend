import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/workers/login', {
        username,
        password
      });

      console.log(response.data);

      // ✅ Store the JWT token for authenticated requests
      localStorage.setItem("token", response.data.token); // adjust key if needed

      console.log('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Worker Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div style={{ marginTop: '1rem' }}>
            <button type="submit" className="primary-button">Login</button>
          </div>
        </form>

        <div style={{ marginTop: '1rem' }}>
          <button className="primary-button" onClick={() => navigate('/landing')}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
