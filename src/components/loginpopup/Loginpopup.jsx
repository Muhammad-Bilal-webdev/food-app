import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({ setshowlogin }) => {
  const [currentstate, setcurrentstate] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = currentstate === "login"
      ? "http://localhost:5000/api/auth/signin"
      : "http://localhost:5000/api/auth/signup";

    const payload = currentstate === "login"
      ? { email, password }
      : { name, email, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      if (currentstate === "login") {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
      } else {
        alert("Signup successful! You can now log in.");
        setcurrentstate("login");
      }

      setshowlogin(false);
    } catch (error) {
      alert("Error connecting to server.");
      console.error(error);
    }
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img onClick={() => setshowlogin(false)} src={assets.cross_icon} alt="" />
        </div>

        <div className="input-container">
          {currentstate === "login" ? null : (
            <input
              type="text"
              placeholder='Your name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder='Your email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Your password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">{currentstate === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-popup-conditions">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        <div className="login-popup-condition2">
          {currentstate === "login" ? (
            <p>Create a new account? <span onClick={() => setcurrentstate("Sign Up")}>Click here</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setcurrentstate("login")}>Login here</span></p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Loginpopup;
