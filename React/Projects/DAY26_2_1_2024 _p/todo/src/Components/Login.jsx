// Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Styless.css";

export const Login = () => {
  const navigate = useNavigate();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const user = storedUserData.find(user => user.username === enteredUsername);

    if (user && user.password === enteredPassword) {
      alert("Login successful");

      navigate("/main", { state: { username: enteredUsername } });
    } else if (user && user.password !== enteredPassword) {
      alert("Invalid password");
    } else if (!user) {
      alert("Invalid username");
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h3 className="login-heading">Login</h3>
      <label className="login-label" htmlFor="enteredUsername">Username</label>
      <input
        className="login-input"
        type="text"
        id="enteredUsername"
        value={enteredUsername}
        onChange={(e) => setEnteredUsername(e.target.value)}
        required
      /><br />
      <label className="login-label" htmlFor="enteredPassword">Password</label>
      <input
        className="login-input"
        type="password"
        id="enteredPassword"
        value={enteredPassword}
        onChange={(e) => setEnteredPassword(e.target.value)}
        required
      /><br />
      <button className="login-button" type="submit">Login</button><br />
      <Link className="login-link" to="/register">Create an Account</Link>
    </form>
  );
};
