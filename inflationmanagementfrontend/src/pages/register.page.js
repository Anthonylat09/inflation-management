import React, { useState } from 'react';
import BarreNavigationComponent from "../components/barreNavigation.component";
import logo from '../logo.svg'; // Import du logo ici
import '../styles/register.page.css'; // Import du fichier CSS externe

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Reset the form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
      <div>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="card">
              <div className="form-field">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="input"
                />
              </div>

              <div className="form-field">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className="input"
                />
              </div>

              <div className="form-field">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                    className="input"
                />
              </div>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
  );
};

export default RegisterPage;
