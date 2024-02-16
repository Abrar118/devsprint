import React from "react";
import google from "/google.svg";
import "./login.css";

const Login = () => {
  return (
    <section className="register-container">
      <div className="form-container">
        <div className="signup-title">
          <h1>Log in to your account</h1>
        </div>

        <div className="partition">
          <hr />
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
              Don't have an account yet? <a href="/register">Sign Up</a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
