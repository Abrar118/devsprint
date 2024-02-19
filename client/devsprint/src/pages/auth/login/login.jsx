import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "/feats.svg";

import { FaDotCircle } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CURRENT_PATH}/users/login`,
        data
      );

      if (response.status === 200) {
        console.log(response.data);
        if (remember) {
          localStorage.setItem("token", JSON.stringify(response.data));
        } else {
          sessionStorage.setItem("token", JSON.stringify(response.data));
        }

        toast.success("Logged in successfully");
        setTimeout(() => {
          navigate("/");
          window.location.reload(true);
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      if (error.response.status === 401) {
        console.log("Invalid credentials");
      } else if (error.response.status === 500) {
        console.log("Internal server error");
      } else if (error.response.status === 404) {
        console.log("User not found");
      }
    }
  };

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

        <form onSubmit={handleSubmit}>
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

            <div className="remember-me">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  onChange={() => {
                    setRemember(!remember);
                  }}
                />
                <label for="remember">Remember me</label>
              </div>

              <span>
                <Link to="/forgot-password">Forgot password?</Link>
              </span>
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
