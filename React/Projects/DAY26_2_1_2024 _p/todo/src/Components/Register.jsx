import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();

    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const userExists = existingUserData.some(user => user.username === use);

    if (userExists) {
      alert("Username already exists");
    } else {

      const newUser = { username: use, password: pass };
      const updatedUserData = [...existingUserData, newUser];

     
      localStorage.setItem('userData', JSON.stringify(updatedUserData));

      alert("Registration successful");
      navigate("/");
    }
  };

  const [use, setUse] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="container">
    <h3 className="register-heading">Register</h3>

    <form className="register-form" onSubmit={handleRegisterClick}>
      <label className="register-label" htmlFor="">Email id</label>
      <input className="register-input" type="text" /><br />
      <label className="register-label" htmlFor="">User_name</label>
      <input className="register-input" type="text" value={use} onChange={(e) => setUse(e.target.value)} required /><br />
      <label className="register-label" htmlFor="">Password</label>
      <input className="register-input" type="password" required value={pass} onChange={(e) => setPass(e.target.value)} /><br />
      <button className="register-button" type="submit">Register</button>
    </form>

    <p className="register-link">
      Already have an account? <button className="register-link-button" onClick={() => navigate("/")}>Login</button>
    </p>
  </div>
);
}