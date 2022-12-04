import React, { useState } from "react";
import "../style/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
    //Firebase login stuff
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Authentication Successful
        // console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    //Firebase registration stuff
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form action="post">
          <h5>E-mail</h5>
          <input
            onChange={handleEmail}
            value={email}
            type="text"
            name="email"
          />
          <h5>Password</h5>
          <input
            onChange={handlePassword}
            value={password}
            type="password"
            name="password"
          />
          <button onClick={signIn} type="submit" className="login_signInButton">
            Sign In
          </button>
          <p>
            By signing in you agree to the FAKE AMAZON conditions of use & sale.
            Please see our privacy notice, our Cookies notice and our
            Interest-Based Ads
          </p>
          <button
            onClick={register}
            type="submit"
            className="login_registerButton"
          >
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
