import React, { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

function Login() {
  const [state, setState] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [username, setName] = useState();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/login", { email, password })
      .then((success) => {
        console.log(success);
        localStorage.setItem("auth-token", success.data.token);
        navigate("/");
        window.location.replace("/");
      })
      .catch((error) => console.log(error));
  };

  const signup = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/signup", { email, password, username })
      .then((success) => {
        window.location.reload();
        console.log(success);
        setTimeout(() => {
          setState("Login");
        }, 2500);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="loginContainer">
      <h2>{state}</h2>

      {state === "Sign Up" ? (
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your Name"
        />
      ) : (
        ""
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email Address"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={state === "Sign Up" ? signup : login}>Continue</button>
      {state === "Sign Up" ? (
        <p>
          Already have an account?{" "}
          <span onClick={() => setState("Login")}>Login</span>
        </p>
      ) : (
        <p>
          Create an account?{" "}
          <span onClick={() => setState("Sign Up")}>Click here</span>
        </p>
      )}
      <div>
        <input type="checkbox" />
        <p>By continuing, I agree to the terms of use & privacy policy</p>
      </div>
    </div>
  );
}

export default Login;
