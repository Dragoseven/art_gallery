import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const handleHomeClick = () => navigate('/');
  const handleLoginClick = () => navigate('/login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Form submission will be handled by backend API later
    console.log('Sign up form submitted:', { firstName, lastName, username, email });
  }

  return (
    <div className="baroque-signup-bg">
      <div className="baroque-signup-page">
        <button
          className="baroque-home-btn"
          style={{ position: 'absolute', top: 24, left: 24, display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: '#fff', fontWeight: 'bold', zIndex: 10 }}
          onClick={handleHomeClick}
        >
          <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>&larr;</span> Home
        </button>
        <h2 className="baroque-signup-title">Sign Up</h2>
        <form className="baroque-signup-form" onSubmit={handleSubmit}>
          <div className="baroque-signup-row">
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className="baroque-signup-row">
            <label>
              Username:
              <input
                type="text"
                name="username"
                required
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="baroque-signup-row">
            <label>
              Password:
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className="baroque-signup-submit">Sign Up</button>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <span style={{ marginRight: '0.5rem', color: '#fffbe9' }}>Already have an account?</span>
            <button
              type="button"
              onClick={handleLoginClick}
              className="baroque-auth-btn"
              style={{ padding: '0.45rem 1.25rem' }}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
