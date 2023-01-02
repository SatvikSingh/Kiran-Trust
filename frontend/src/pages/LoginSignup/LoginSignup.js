import React from "react";
import "./LoginSignup.css";
import script from "./LoginsignupScript.js";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

const LoginSignup = () => {
  return (
    <section>
      <script src={script} type="text/javascript" />
      <div className="login-container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <PersonIcon className="icon" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <LockIcon className="icon" />
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <PersonIcon className="icon" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <EmailIcon className="icon" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <LockIcon className="icon" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <LockIcon className="icon" />
                <input type="password" placeholder="Confirm Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;