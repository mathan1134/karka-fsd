import { useState } from 'react'
import React from 'react'

export const Button=()=>{
const [Count,setCount]=useState(0)    
 const Increase=()=>{
      setCount(Count+1)
    }
    
    const Decrease=()=>{
      setCount(Count-1)
    }

  return (
    <div>
        <button onClick={Increase}>+</button>
        <div>{Count}</div>
        <button onClick={Decrease}>-</button>

    </div>
  )
}
