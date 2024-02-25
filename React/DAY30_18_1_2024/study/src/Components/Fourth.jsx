import React, { useRef } from 'react';
import { Fourth2 } from './Fourth2';

export const MyForm = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <Fourth2 ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
};

export default MyForm;  
