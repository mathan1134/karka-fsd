import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
   <>
   <form action="/Home">
   <label>UserName</label>
   <input type="text"  required/><br />
   <label htmlFor="">Password</label>
   <input type="password" required />
   <button>Submit</button>
   </form>
   <Link to="/register">Create account</Link>
   </>
  )
}
