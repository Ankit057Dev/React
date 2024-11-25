import React from 'react'
import './SignUp.css'


const SignUp = () => {
  return (
    <div className="signup-box">
    
    <div className='heading'>
    <h2>Sign Up</h2>
    </div>

    <div className="user-deatils">


    <div className='usernamer'>
    <label className="label">Enter your Username :</label><br/>
    <input type="text" className="input" placeholder="Enter your username"/>
    </div>

    <div className='useremail'>
    <label className="label" >Enter Your Email ID : </label><br/>
    <input type="email" className="input" placeholder="Enter your email"/>
    </div>

    <div className="userpassword">
        <label className="label">Enter Your Password :</label><br/>
        <input type ="password" className="input" placeholder='Enter You Password'/>
    </div>
    <div className='submit-button'>
      <button>
        Submit
      </button>
    </div>

    </div>
    </div>
  );
}

export default SignUp