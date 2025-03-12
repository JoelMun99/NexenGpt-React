import React, { useState } from "react";

import logo from "../../assets/NexenIcons/NexenGPT.svg";
import GoogleIcon from "../../assets/NexenIcons/googleicon.svg";
import MicrosoftIcon from "../../assets/NexenIcons/microsofticon.svg";
import AppleIcon from "../../assets/NexenIcons/apple.svg";

import "./SignupPage.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="signup-page">
      <div className="signup-page__container">
 
        <div className="signup-page__logo-section">
          <div className="signup-page__logo">
            <img src={logo} alt="Nexen Logo" />
          </div>
        </div>

 
        <h2 className="signup-page__subtitle">Create an account</h2>


        <div className="signup-page__form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="signup-page__email-input"
          />
        </div>
        <button type="submit" className="signup-page__continue-button">
          Continue
        </button>
        <p className="signup-page__login-text">
          Already have an account?{' '}
          <a href="/login" className="signup-page__login-link">Log in</a>
        </p>

     
        <div className="signup-page__divider">
          <span>OR</span>
        </div>

 
        <div className="signup-page__social-buttons">
          <button className="signup-page__social-button signup-page__social-button--google">
            <img src={GoogleIcon} alt="Google Icon" className="signup-page__social-icon" />
            Continue with Google
          </button>
          <button className="signup-page__social-button signup-page__social-button--microsoft">
            <img src={MicrosoftIcon} alt="Microsoft Icon" className="signup-page__social-icon" />
            Continue with Microsoft Account
          </button>
          <button className="signup-page__social-button signup-page__social-button--apple">
            <img src={AppleIcon} alt="Apple Icon" className="signup-page__social-icon" />
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
