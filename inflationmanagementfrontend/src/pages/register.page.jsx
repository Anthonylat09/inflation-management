import React, { useState } from 'react';
import BarreNavigationComponent from "../components/barreNavigation.component";
import logo from '../logo.svg'; // Import du logo ici
import '../styles/register.page.css';
import {authenticate, isAuthenticated} from "../services/authentification.service"; // Import du fichier CSS externe
import {useNavigate} from 'react-router';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');


  const handleFirstNameChange = (event) =>
  {
    setPrenom(event.target.value);
  }
  const handleNameChange = (event) =>
  {
    setNom(event.target.value);
  }

  const emailIsValid = (email) => {
    // Expression régulière pour valider le format de l'adresse email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('')
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('')
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError('')
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailIsValid(email)) {
      setEmailError("Adresse email invalide.");
      return;
    }
    if (password.length < 8) {
      setPasswordError("Le mot de passe doit avoir au moins 8 caractères.");
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Les mots de passe ne correspondent pas.");
      return;
    }
    const user = {nom,prenom,email, password,"role":"USER"}

    fetch("http://localhost:8080/authentication/register",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(user)
        }).then(response => {
          if(response.status === 200)
          {
            authenticate(email, password).then(() => {
              if (isAuthenticated())
              {
                navigate("/budget");
              }

            })
          }
    })
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
                    placeholder="Prénom"
                    value={prenom}
                    onChange={handleFirstNameChange}
                    required
                    className="input"
                />
              </div>
              <div className="form-field">
                <input
                    type="text"
                    placeholder="Nom"
                    value={nom}
                    onChange={handleNameChange}
                    required
                    className="input"
                />
              </div>
              <div className="form-field">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className={`input ${emailError ? 'input-error' : ''}`}
                />
                <div>
                {emailError && <span className="error-tooltip">{emailError}</span>}
                </div>
              </div>

              <div className="form-field">
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className={`input ${passwordError ? 'input-error' : ''}`}
                />
                <div>
                {passwordError && <span className="error-tooltip">{passwordError}</span>}</div>
              </div>

              <div className="form-field">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                    className={`input ${confirmPasswordError ? 'input-error' : ''}`}
                />
                <div>
                {confirmPasswordError && <span className="error-tooltip">{confirmPasswordError}</span>} </div>
              </div>
            </div>

            <button type="submit" className="submit-button">{"S'inscrire"}</button>
          </form>
        </div>
      </div>
  );
};

export default RegisterPage;
