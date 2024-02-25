import React from 'react'

export const About=(Som)=> {
     console.log(Som)

  return (
    <div>
        <div>About</div>
        <div>{Som.Data.age}</div>
        <div>degree:{Som.Data.degree}</div>
    </div>
  )
}
