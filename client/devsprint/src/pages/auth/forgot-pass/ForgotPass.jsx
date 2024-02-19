import React, { useState } from "react";
import "./ForgotPass.css";
import forgotImage from "/feats.svg";
import { toast } from "react-toastify";
import { generateOTP } from "../../../utility/getTimes";
import { sendEmailTo } from "../../../utility/Email/EmailSend";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("1234");
  const [showEnterCode, setShowEnterCode] = useState(true);
  const [showResetPass, setShowResetPass] = useState(false);

  const sendVerificationCode = async (e) => {
    e.preventDefault();

    if (showEnterCode) {
      const tempCode = generateOTP(6);
      setGeneratedCode(tempCode);
      await sendEmailTo(email, tempCode);
      setShowEnterCode(false);
    } else {
      if (code === generatedCode) {
        setShowResetPass(true);
        toast.success("Code verified successfully");
      } else {
        toast.error("Invalid code");
      }
    }
  };

  return (
    <section className="forgot-container">
      <div className="forgot-image">
        <img src={forgotImage} alt="forgot" />
      </div>

      <div className="forgotform-container">
        <div className="signup-title">
          <h1>Recover your account</h1>
          <p>
            Provide the email to your account and a recovery mail will be sent
            to you with instructions on how to recover your account
          </p>
        </div>

        {!showResetPass ? (
          <form onSubmit={sendVerificationCode}>
            <div className="fields">
              {showEnterCode ? (
                <div className="field">
                  <label for="email">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              ) : (
                <div className="field">
                  <label for="code">Verification Code</label>
                  <input
                    required
                    type="text"
                    name="code"
                    id="code"
                    placeholder="Enter verification code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              )}
            </div>

            <div className="actions">
              <button type="submit">
                {showEnterCode ? "Send verification code" : "Verify code"}
              </button>
            </div>
          </form>
        ) : (
          <ResetPass email={email} />
        )}
      </div>
    </section>
  );
};

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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="field">
          <label for="confirm-password">Confirm Password</label>
          <input
            required
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="actions">
        <button type="submit">Reset password</button>
      </div>
    </form>
  );
};

export default ForgotPass;
