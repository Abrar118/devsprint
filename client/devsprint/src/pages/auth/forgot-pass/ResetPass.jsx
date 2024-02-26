import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ForgotPass.css";


export const ResetPass = ({ email }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const requestBody = {
        newPassword: password,
      };
      const response = await axios.patch(
        `${import.meta.env.VITE_CURRENT_PATH}/users/${email}/password`,
        requestBody
      );
      toast.success("Password reset successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      if (error.response.status === 404) {
        toast.error("User not found");
      } else if (error.response.status === 500) {
        toast.error("Server error");
      }
    }
  };

  return (
    <form onSubmit={resetPassword}>
      <div className="fields">
        <div className="field">
          <label for="password">Password</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="field">
          <label for="confirm-password">Confirm Password</label>
          <input
            required
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
      </div>

      <div className="actions">
        <button type="submit">Reset password</button>
      </div>
    </form>
  );
};
