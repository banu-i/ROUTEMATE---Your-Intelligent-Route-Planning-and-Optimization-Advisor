import React from 'react';
import styles from './LogInSignUpPage.module.css';

import user_icon from '../../components/assets/user_icon.png';
import email_icon from '../../components/assets/email_icon.png';
import password_icon from '../../components/assets/password_icon.png';

const LogInSignUpPage = () => {
  return (
    <div className={styles.loginSignupContainer}>
      <div className={styles.loginSignupHeader}>
        <div className={styles.loginSignupText}>Sign Up</div>
        <div className={styles.underline}></div>
        {/* <div className={styles.loginSignupText}>Login</div> */}
      </div>
      <div className={styles.loginSignupInputs}>
        <div className={styles.loginSignupInput}>
          <img className={styles.userIcon} src={user_icon} alt="User Icon" />
          <input type="text" placeholder="Username" />
        </div>
        <div className={styles.loginSignupInput}>
          <img className={styles.userIcon} src={email_icon} alt="E-Mail Icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className={styles.loginSignupInput}>
          <img
            className={styles.userIcon}
            src={password_icon}
            alt="Password Icon"
          />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className={styles.forgotPassword}>
        Lost Password? <span>Click Here!</span>
      </div>
      <div className={styles.submitContainer}>
        <div className={styles.submit}>Sign Up</div>
        <div className={styles.submit}>Login</div>
      </div>
    </div>
  );
};

export default LogInSignUpPage;
