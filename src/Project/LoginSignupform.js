
import React, { useState } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Loginsignup.css'

const LoginSignupform = () => {
    const [data, setData]=useState('Sign Up')
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{data}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {data==="Login"?<div></div>:<div className='input'>
                <i className='bi bi-person'></i>
                <input type='text' placeholder='Name'></input>
            </div>}
            
            <div className='input'>
                <i className='bi bi-envelope'></i>
                <input type='email' placeholder='Email Id'></input>
            </div>
            <div className='input'>
                <i className='bi bi-lock'></i>
                <input type='password' placeholder='Password'></input>
            </div>
        </div>
        {data==="Sign Up"?<div></div>:<div className='passwordforgot'>Forgot password?? <span>Click Here!</span></div>}
        
        <div className='submit-container'>
            <div className={data==="Login"?"submit msg":"submit"} onClick={()=>{setData("Sign Up")}}>Sign Up</div>
            <div className={data==="Sign Up"?"submit msg":"submit"} onClick={()=>{setData("Login")}}>Login</div>
        </div>
      
    </div>
  )
}

export default LoginSignupform
