import React, { useState } from "react";
import "./register.css";
import loginImage from "/feats.svg";
import { Link } from "react-router-dom";
import axios from "axios";

import { FaDotCircle } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { getTextFormattedTime } from "../../../utility/getTimes";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    data.confirmPassword = undefined;
    data.phone= "+880-"
    data.avatar = import.meta.env.VITE_USER_IMAGE;
    data.publicId = import.meta.env.VITE_AVATAR_PUBLIC_ID;
    data.createdAt = new Date().toISOString();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_CURRENT_PATH}/users`,
        data
      );

      if (response.status === 201) {
        toast.success("User created successfully");
        e.target.reset();
      }

      return;
    } catch (error) {
      console.error(error);
      if (error.response.status === 400) {
        toast.error("User already exists");
      } else if (error.response.status === 500) {
        toast.error("Internal server error");
      }
      return;
    }
  };

  return (
    <section className="register-container">
      <div className="login-image">
        <img src={loginImage} alt="login" />
      </div>
      <div className="form-container">
        <div className="signup-title">
          <h1>Create an account</h1>
        </div>

        <div className="partition">
          <hr />
          <FaDotCircle className="dot-icon" />
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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="password-icon">
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
            </div>
            <div className="field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirm-password"
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="actions">
            <button type="submit">Sign up</button>
            <span>
              Already have an account? <Link to="/login">Log in</Link>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
