import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
   const[error,setError]=useState('')
   const[username,getUsername]=useState('')
   const[password,getPassword]=useState('')
   const navigate=useNavigate()

   const handlelogin = (e) => {
   e.preventDefault();
     const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        navigate("/Chat")
    }else{
          setError('wrong username and password')
       }
   }
   

  return (
    <div className='login_main'>
        <div className='login_container'>
            <h3 className='login_h3'>LOGIN</h3>
            <form className='login_form' onSubmit={handlelogin}>
                <input className='login_input1' required type="text" value={username} onChange={(e)=>getUsername(e.target.value)} placeholder='User Name'/><br />
                <input className='login_input2' type="password" value={password} onChange={(e)=>getPassword(e.target.value)} required placeholder='Password' /><br />
                <button className='login_button' type='submit' >Submit</button>
                <span className='login_span'>{error}</span>
            </form>
            <p className='login_p'>Don't have a account <Link to="/Register" className='login_link'>Create a account</Link></p>
        </div>
    </div>
  )
}

export default Login