import React, { useEffect, useRef } from 'react';

const RefExample = () => {
  // Create a ref using useRef
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // document.getElementById('inputElement').focus();
  // }, [])

  const handleButtonClick = () => {
    alert(`Input Value: ${inputRef.current.value}`);
  
    // const inputValue = document.getElementById('inputElement').value;
    // alert(`Input Value: ${inputValue}`); 

  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Type something..." />

      <button onClick={handleButtonClick}>Get Input Value</button>

      {/* <input id="inputElement" type="text" placeholder="Type something..." />
      <button onClick={handleButtonClick}>Get Input Value</button> */}

    </div>
  );
};

export default RefExample;
