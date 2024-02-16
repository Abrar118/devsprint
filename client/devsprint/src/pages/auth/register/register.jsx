import React from "react";
import google from "/google.svg";
import "./register.css";

const Register = () => {
  return (
    <section className="register-container">
      <div className="form-container">
        <div className="signup-title">
          <h1>Create an account</h1>
          <button type="button">
            <img src={google} alt="google-icon" />
            <span>Sign up with Google</span>
          </button>
        </div>

        <div className="partition">
          <hr />
          <span>or</span>
          <hr />
        </div>

        <form>
          <div className="fields">
            <div className="field">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
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
            <div className="field">
              <label for="confirm-password">Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div className="actions">
            <button type="submit">Sign up</button>
            <span>
              Already have an account? <a href="./login.html">Login</a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
