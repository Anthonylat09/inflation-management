import React, { useState } from 'react';
import BarreNavigationComponent from "../components/barreNavigation.component";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    // Reset the form
    setName('');
    setEmail('');
  };

  return (
    <div>
      <div>
        <BarreNavigationComponent></BarreNavigationComponent>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              style={{ borderRadius: '5px', padding: '5px', marginLeft: '10px', textAlign: 'center' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{ borderRadius: '5px', padding: '5px', marginLeft: '10px', textAlign: 'center' }}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
