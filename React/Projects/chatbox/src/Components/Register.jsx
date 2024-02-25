import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (localStorage.getItem(username)) {
            setError('User already exists');
        } else {
            localStorage.setItem(username, password);
            setError('');
            alert(
                "account create sucessfully" 
            )

        }
    };

    return (
        <div className='Reg_main'>
            <div className='Reg_main2'>
                <h3 className='Reg_h3'>REGISTER</h3>
                <form className='Reg_form' onSubmit={handleRegister}>
                    <label htmlFor="username">Username</label><br />
                    <input className='reg_input1' type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                    <label htmlFor="password">Password</label><br />
                    <input className='reg_input2' type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <label htmlFor="email">Email ID</label><br />
                    <input className='reg_input3' type="email" id="email" /><br />
                    <button className='Reg_button' type='submit'>Submit</button>
                    <span className='reg_span'>{error}</span>
                </form>
                <p className='reg_p'>Already have an account? <Link to="/" className='reg_link'>Login Page</Link></p>
            </div>
        </div>
    );
};

export default Register;
