import React from 'react'
import './Register.css'
function Register() {
  return (
    <div className='body'>
    <div className='card-container'>
      <form className='card'>
      <h4 align='center'><b>Register here!</b></h4>
      <h5>Name:  
      <input className='firstname' type='text' placeholder='Firstname'></input></h5>
      <h5><input className='lastname' type='text' placeholder='Lastname'></input></h5>
      <h5>Email:
      <input className='email' type='email' placeholder='abc@gmail.com'></input></h5>
      <h5 className='pass'>Password:
      <input className='password'type='password'></input></h5>
      <h5>Gender</h5>
      <label for='male'><b>Male:</b><input className='radio' type='radio'id='male' name='gender' value='male'></input></label>
      
      <label for='Female'><b>Female:</b> <input className='radio1' type='radio'id='female' name='gender' value='female'></input></label>
      <h5>Address:  
      <input className='Address' type='textarea' placeholder='Address'></input></h5>
      <h5>Mobile:
      <input className='number' type='number' placeholder='number'></input></h5>
      <div><button  className='submi' type='submit'>Submit</button>
        <button className='rese' type='reset'>Reset</button>
        </div></form>
    </div>
    </div>
  )
}

export default Register