import React, { useState } from 'react';
import logo from '../../assets/NexenIcons/NexenGPT.svg';
import GoogleIcon from "../../assets/NexenIcons/googleicon.svg";
import MicrosoftIcon from "../../assets/NexenIcons/microsoftIcon.svg";
import AppleIcon from "../../assets/NexenIcons/apple.svg";

import './LoginPage.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="login-page">
      <div className="login-page__container">
        <div className="login-page__logo-section">
          <div className="login-page__logo">
            <img src={logo} alt="Nexen Logo" />
          </div>
        </div>

        <h1 className="login-page__welcome-text">Welcome Back</h1>

        <div className="login-page__form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="login-page__email-input"
          />
        </div>
        <button className="login-page__continue-button">Continue</button>
        <p className="login-page__signup-text">
          Don't have an account?{' '}
          <a href="#" className="login-page__signup-link">
            Sign up
          </a>
        </p>
        <div className="login-page__divider">
          <span>OR</span>
        </div>

        <div className="login-page__social-buttons">
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

export default LoginPage;