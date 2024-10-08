import React from 'react';
import styles './LogInSignUpPage.module.css'

import user_icon from '../components/assets/user_icon.png'
import email_icon from '../components/assets/email_icon.png'
import password_icon from '../components/assets/password_icon.png'

const LoginSignup = () => {
  return <div className="loginSignupContainer">
    <div className="loginSignupHeader">
      <div className= "loginSignupText">Sign Up</div>
      <div className= "loginSignupText">Sign Up</div>
    </div>
    <div className='loginSignupInputs'>
      <div className="loginSignupInput">
        <img src= {user_icon} alt=""/>
        <input type= "text"/>
      </div>
      <div className="loginSignupInput">
        <img src= {email_icon} alt=""/>
        <input type= "email"/>
      </div>
      <div className="loginSignupInput">
        <img src= {password_icon} alt=""/>
        <input type= "password"/>
      </div>
    </div>
    <div className='forgotPassword'>Lost Password? <span>Click Here!</span></div>
    <div className='submitContainer'>
      <div className='submit'>Sign Up</div>
      <div className='submit'>Login</div>

    </div>
  </div>;
};

export default LoginSignup;
