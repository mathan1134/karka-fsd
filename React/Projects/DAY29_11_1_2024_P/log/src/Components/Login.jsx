import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = 'eve.holt@reqres.in';
    const password = 'cityslicka';

    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      console.log('Login successful', response.data);
      const token = response.data;
      localStorage.setItem('token', JSON.stringify(token));

    } catch (error) {
      console.error('Login failed', error);
    }
  };



  return (
    <>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
