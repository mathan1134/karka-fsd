import React, { useContext } from 'react';
import { MyContext } from './Day';

const Dayc = () => {
    const myValue = useContext(MyContext);
  
    return (
      <div>
        <p>Current Value: {myValue}</p>
      </div>
    );
  }
  
  export default Dayc;