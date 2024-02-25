import React from 'react'
import {Gol} from "../Components/About2"
import {Button} from "./Button"




export const Tab = () => {
    const Table=[
        {
         name:"mathan",
        age:25,
        from:"KK"
        },
        {
         name:"mohan",
        age:29,
        from:"TVM"
        },,
        {
         name:"remon",
        age:22,
        from:"NGL"
        },
        ,
        {
         name:"aishu",
        age:13,
        from:"TVC"
        },

    ]
  return (
    <div>
        <Gol Tabs={Table}/>
        
    </div>
  )
}
