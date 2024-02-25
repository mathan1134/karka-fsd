import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Profile = () => {
  const location = useLocation();
  const username = location.state?.username;

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUpdatePassword = (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const user = storedUserData.find((user) => user.username === username);

    if (!user || user.password !== currentPassword) {
      setError('Current password is incorrect.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirmation do not match.');
      return;
    }

    const updatedUserData = storedUserData.map((user) =>
      user.username === username ? { ...user, password: newPassword } : user
    );
    localStorage.setItem('userData', JSON.stringify(updatedUserData));

    setError('');
    alert('Password updated successfully');
  };

  return (
    <div className="profile-container">
      <h3>Welcome, {username}!</h3>
      <h4>Change Password</h4>
      <form className="password-form" onSubmit={handleUpdatePassword}>
        <input
          className="password-input"
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <br />
        <input
          className="password-input"
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br />
        <input
          className="password-input"
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <button className="update-button" type="submit">
          Update Password
        </button>
      </form>
      <p className="error-message">{error}</p>
    </div>
  );
};
