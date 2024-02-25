import React from 'react'
import {Gol} from './About2'
import "./Paint.css"

export const Home = () => {
    const Jsondata={
        name:"mathan",
        age:25,
        from:"KK"
    }
   
  return (
    <>
    <div>Home</div>
    <Gol Data={Jsondata}    />

    </>
  )
}




