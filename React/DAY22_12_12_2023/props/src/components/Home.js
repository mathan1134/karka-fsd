import React from 'react'
import {About} from "./About"
export const Home= () =>{
    const Jsondata={
      names:"mathan",
      age:25,
      degree:"BA english"
    }
  return (
    <>
    <div>Home</div>
    <About Data={Jsondata}/>
    </>
  )
}
