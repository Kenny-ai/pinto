import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useState } from "react";
import "./Login.css";
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/")
      })
      .catch(error => alert(error.message))
    
  }

  const register = (e) => {
    e.preventDefault();
  
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //user successfully created with email and password
        console.log(auth);
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message));
    
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="" />
      </Link>

      <div className="login-container">
        <h1>Sign-In</h1>

        <form action="">
        <h5>Name</h5>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />

          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
          
          <button type='submit' onClick={signIn} className="login-button">Sign in</button>
        </form>

        <p>By continuing, you agree to pinto's terms and conditions of use</p>
        <hr/>
        <p className="new"><strong>New to Pinto?</strong></p>

        <button onClick={register} className="create-account-button">Create an account</button>
      </div>
      
    </div>
  )
}

export default Login
// export { name };
