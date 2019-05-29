import React from 'react';
import './Login.css';

function login = (username) => {
  localStorage.setItem("username", username)
}

const Login = () => {
  return(
    <div>
      <form>
        <input className="username-input" placeholder="Username"></input>
        <input className="password-input" placeholder="Password"></input>
        <button className="login-button">Login</button>
      </form>
    </div>
  )
}

export default Login;
