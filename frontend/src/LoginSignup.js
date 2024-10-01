import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = ({ userType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder login authentication logic
    if (userType === 'candidate') {
      navigate('/candidate-dashboard'); // Redirect to candidate dashboard
    } else {
      navigate('/recruiter-dashboard'); // Redirect to recruiter dashboard
    }
  };

  return (
    <div className="login-signup-container">
      <h2>{userType === 'candidate' ? 'Candidate Login' : 'Recruiter Login'}</h2>
      <form className="login-signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
      <p>
        Don't have an account? <a href={`/${userType}-signup`} className="signup-link">Sign up here</a>
      </p>
    </div>
  );
};

export default LoginSignup;
