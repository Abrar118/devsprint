import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import loginImage from "/feats.svg";

import { FaDotCircle } from "react-icons/fa";

const Login = () => {
  return (
    <section className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="login" />
      </div>

      <div className="loginform-container">
        <div className="signup-title">
          <h1>Log in to your account</h1>
        </div>

        <div className="partition">
          <hr />
          <FaDotCircle className="dot-icon" />
          <hr />
        </div>

        <form>
          <div className="fields">
            <div className="field">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="field">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="actions">
            <button type="submit">Sign up</button>
            <span>
              Don't have an account yet? <Link to="/register">Sign Up</Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
