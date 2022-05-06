import React from 'react'
import './Pages.css'

const Register = ()=>{
    return(
        <div className='registerPage'>
            <div className='register-page-box'>
                <h1>CREATE AN ACCOUNT</h1>
                <div className='register-info'>
                    <input type='text' id='firstName' name='firstName' placeholder='first name' className='register-input'></input>
                    <input type='text' id='lastName' name='lastName' placeholder='last name' className='register-input'></input>
                    <input type='text' id='userName' name='userName' placeholder='username' className='register-input'></input>
                    <input type='email' id='email' name='email' placeholder='email' className='register-input'></input>
                    <input type='password' id='password' name='password' placeholder='password' className='register-input'></input>
                    <input type='password' id='cpassword' name='cpassword' placeholder='confirm password' className='register-input'></input>
                </div>
                <p>By creating an account, I consent to the processing of my personal data in accordance with the <span>PRIVACY POLICY</span></p>
                <button id='create-account'>CREATE</button>
            </div>
        </div>
    )
}

export default Register;