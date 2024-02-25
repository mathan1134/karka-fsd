import React from 'react';
import { useLocation } from 'react-router-dom';

const MyComponent = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Current Location: {location.pathname}</h2>
    </div>
  );
};

export default MyComponent;
