import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className='body'>
    <div  className='card--container' >
    
      <form className='caard'>
      <h3 align='center'><b>Login here!</b></h3>
        <h5>UserName:
        <input className='username' type='text' placeholder='username'></input><br></br>
        password:
        <input className='passw' type='password' placeholder='password'></input>
        </h5>
        <button  className='submit' type='submit'>Submit</button>
        <button className='reset' type='reset'>Reset</button>
      </form>
    </div></div>
  )
}

export default Login