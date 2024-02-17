import React from "react";
import google from "/google.svg";
import "./register.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <section className="register-container">
      <div className="form-container">
        <div className="signup-title">
          <h1>Create an account</h1>
        </div>

        <div className="partition">
          <hr />
          <hr />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="field">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                required
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
              Already have an account? <a href="/login">Log in</a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
