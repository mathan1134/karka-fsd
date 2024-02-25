import React, { useState } from 'react';

export const Button1 = () => {
  const [count, setCount] = useState("hi");

  const increase = () => {
    setCount("Hello");
  };

  return (
    <div>
      <button onClick={increase}>Change</button>
      <div>{count}</div>
    </div>
  );
};
