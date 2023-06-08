import React, { useState } from 'react';
import BarreNavigationComponent from "../components/barreNavigation.component";
import logo from '../logo.svg'; // Importez votre logo ici

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  };

  return (
    <div>
      <div>
        <BarreNavigationComponent></BarreNavigationComponent>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={logo} alt="Logo" style={{ width: '200px', height: '240px' }} /> {/* Ajoutez votre logo ici */}
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'lightgray', padding: '40px', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
                style={{ border: '1px solid gray', borderRadius: '10px', padding: '15px', textAlign: 'center', width: '400px', fontSize: '18px' }}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
                style={{ border: '1px solid gray', borderRadius: '10px', padding: '15px', textAlign: 'center', width: '400px', fontSize: '18px' }}
              />
            </div>
          </div>

          <button type="submit" style={{ alignSelf: 'center', marginTop: '10px', background: '#ff7300', color: 'white', border: 'none', borderRadius: '15px', padding: '15px', width: '400px', fontSize: '18px' }}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;