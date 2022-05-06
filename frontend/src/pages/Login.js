import React from 'react';
import './Pages.css';

const Login = ()=>{
    return(
        <div className='login-page'>
            <div className='login-page-box'>
                <h1>SIGN IN</h1>
                <input type='text' id='LuserName' name='LuserName' placeholder='username' className='login-input'></input>
                <input type='password' id='Lpassword' name='Lpassword' placeholder='password' className='login-input'></input>
                <button id='login-account'>LOGIN</button>
                <p id='forget-password'>DO NOT REMEMBER PASSWORD?</p>
                <p id='create-new'>CREATE NEW ACCOUNT</p>
            </div>
        </div>
    )
}

export default Login;