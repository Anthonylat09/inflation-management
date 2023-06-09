import React, { useState } from 'react';
import BarreNavigationComponent from "../components/barreNavigation.component";
import logo from '../logo.svg';
import { useNavigate } from 'react-router';
import '../styles/login.page.css'; // Import du fichier CSS externe

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form
    setEmail('');
    setPassword('');
    navigate("/budget");
  };

  return (
      <div>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="card">
              <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="input"
                />
              </div>

              <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className="input"
                />
              </div>
            </div>

            <button type="submit" className="submit-button">Se connecter</button>
          </form>
        </div>
      </div>
  );
};

export default LoginPage;
