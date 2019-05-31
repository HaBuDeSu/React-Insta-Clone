import React from 'react';
import './Login.css';

function login() {
  localStorage.setItem("username", document.getElementById('username').value)
}

const Login = () => {
  return(
    <div className="login-form">
      <form onSubmit={login}>
        <input className="username-input" placeholder="Username" id="username"></input>
        <input className="password-input" placeholder="Password" id="password"></input>
        <button className="login-button">Login</button>
      </form>
    </div>
  )
}

export default Login;
