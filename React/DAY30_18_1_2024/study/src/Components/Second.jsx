import { useRef } from "react"
import React from 'react'


export const Second = () => {
    const inputRef = useRef(null);

    function handleClick() {
      inputRef.current.focus();
    }
  
    return (
      <>
        <input ref={inputRef} />
        <button onClick={handleClick}>
          Focus the input
        </button>
      </>
  )
}
