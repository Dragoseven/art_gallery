import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Here you would check identifier against username or email in your backend
    // ...login logic...
  }

  return (
    <div className="baroque-login-bg">
      <div className="baroque-login-page">
        <button
          className="baroque-home-btn"
          style={{ position: 'absolute', top: 24, left: 24, display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: '#fff', fontWeight: 'bold', zIndex: 10 }}
          onClick={() => navigate('/')}
        >
          <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>&larr;</span> Home
        </button>
        <h2 className="baroque-login-title">Login</h2>
        <form className="baroque-login-form" onSubmit={handleSubmit}>
          <label>
            Username or Email:
            <input
              type="text"
              name="identifier"
              required
              value={identifier}
              onChange={e => setIdentifier(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              name="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="baroque-login-submit">Login</button>
          <div className="baroque-forgot-password">
            <a href="#" tabIndex="0">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
