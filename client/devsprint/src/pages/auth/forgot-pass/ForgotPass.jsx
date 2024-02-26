import React, { useState } from "react";
import "./ForgotPass.css";
import forgotImage from "/feats.svg";
import { toast } from "react-toastify";
import { generateOTP } from "../../../utility/getTimes";
import { sendEmailTo } from "../../../utility/Email/EmailSend";
import { ResetPass } from "./ResetPass";

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

export default ForgotPass;
