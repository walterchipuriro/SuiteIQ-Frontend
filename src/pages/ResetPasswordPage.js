import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './ResetPasswordPage.css';

function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Extract token from URL query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromURL = params.get('token');
    if (!tokenFromURL) {
      setError('Missing or invalid reset token.');
    } else {
      setToken(tokenFromURL);
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      await axios.post('http://localhost:8081/api/auth/reset-password', {
        token,
        newPassword
      });

      setSuccessMessage('Password reset successful. Redirecting to login...');
      setError('');
      setTimeout(() => navigate('/'), 3000);
    } catch (error) {
      setError(error.response?.data?.message || 'Reset failed. Try again.');
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-box">
        <h2>Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error-text">{error}</p>}
          {successMessage && <p className="success-text">{successMessage}</p>}
          <button type="submit" className="primary-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
