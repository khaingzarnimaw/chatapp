import React from 'react'
// import {RiImageAddFill} from 'react-icons/ri'
import Add from "../img/avatar.png"

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Khaing Chat</span>
        <span className='tittle'>Register</span>
         <form>
           <input type="type" placeholder='display name'/>
           <input type="email" placeholder='email'/>
           <input type="password" placeholder='password'/>
           <input style={{display:"none"}} type="file" id="file"/>
           <label htmlFor='file'>
           
            <img src={Add} alt="" />
            <span>Add an avatar</span>
           </label>
           <button>Sign up</button>
         </form>
         <p>You do have an account? Login</p>
      </div>  
    </div>
  )
}

export default Register
