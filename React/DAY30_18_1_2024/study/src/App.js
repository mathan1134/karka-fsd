import React, { useState, useEffect } from 'react';
import User from "./Components/User"
import { Second } from './Components/Second';
import Third from './Components/Third'
import Fourth from './Components/Fourth'
import Fifth from './Components/Fifth'
import Sixth from './Components/Sixth'
import Day from './Components/Day'

const DependencyExample = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  // without dependency
  useEffect(() => {
    return () => {
      console.log(" dependency");
    };
  });

  // with dependency (uncomment if needed)
  // useEffect(() => {
  //   console.log("Effect with dependency");
  //   return () => {
  //     console.log("Cleanup with dependency");
  //   };
  // }, [count]);

  // with empty array (uncomment if needed)
  // useEffect(() => {
  //   console.log("Effect with empty array");
  //   return () => {
  //     console.log("Cleanup with empty array");
  //   };
  // }, []);

  return (
    <div>
      <p style={{backgroundColor:"green"}}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      <hr></hr>
      <marquee bgcolor="red"><p>hi</p></marquee>
      <pre>jio</pre>

      <User />
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Day/>
    </div>
  );
};

export default DependencyExample;
