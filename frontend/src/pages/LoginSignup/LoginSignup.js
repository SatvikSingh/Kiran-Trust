import React, { useState, useEffect, Fragment } from "react";
import "./LoginSignup.css";
import script from "./LoginsignupScript.js";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registerAction } from "../../Redux/Actions/UserActions";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../Layout/Loader/Loader";
import MetaData from "../Layout/MetaData";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const { error, loading, userInfo, isAuth } = useSelector(
    (state) => state.user
  );
  const [userlogin, setuserlogin] = useState({
    email: "",
    password: "",
  });

  const [userregister, setuserregister] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleinputlogin = (e) => {
    e.preventDefault();
    setuserlogin({ ...userlogin, [e.target.name]: e.target.value });
  };

  const handleinputregister = (e) => {
    e.preventDefault();
    setuserregister({ ...userregister, [e.target.name]: e.target.value });
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    dispatch(loginAction(userlogin));
  };

  const handleregister = async (e) => {
    e.preventDefault();
    dispatch(registerAction(userregister));
  };

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/dashboard";

  useEffect(() => {
    if (error) {
      console.log(error);
      // clear error
    }
    if (isAuth) {
      history(redirect);
    }
  }, [dispatch, error, isAuth, history, redirect]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section>
            <MetaData title={`Login/Sign Up Page`} />
            <script src={script} type="text/javascript" />
            <div className="login-container">
              <div className="forms-container">
                <div className="signin-signup">
                  <form
                    action="#"
                    className="sign-in-form"
                    onSubmit={handlelogin}
                  >
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                      <PersonIcon className="icon" />
                      <input
                        type="text"
                        placeholder="Username"
                        value={userlogin.email}
                        name="email"
                        required
                        onChange={handleinputlogin}
                      />
                    </div>
                    <div className="input-field">
                      <LockIcon className="icon" />
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={userlogin.password}
                        required
                        onChange={handleinputlogin}
                      />
                    </div>
                    <input type="submit" value="Login" className="btn solid" />
                  </form>
                  <form
                    action="#"
                    className="sign-up-form"
                    onSubmit={handleregister}
                  >
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                      <PersonIcon className="icon" />
                      <input
                        type="text"
                        placeholder="Name"
                        value={userregister.name}
                        name="name"
                        required
                        onChange={handleinputregister}
                      />
                    </div>
                    <div className="input-field">
                      <EmailIcon className="icon" />
                      <input
                        type="email"
                        placeholder="Email"
                        value={userregister.email}
                        name="email"
                        required
                        onChange={handleinputregister}
                      />
                    </div>
                    <div className="input-field">
                      <LockIcon className="icon" />
                      <input
                        type="password"
                        placeholder="Password"
                        value={userregister.password}
                        name="password"
                        required
                        onChange={handleinputregister}
                      />
                    </div>
                    <div className="input-field">
                      <LockIcon className="icon" />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        value={userregister.cpassword}
                        name="cpassword"
                        required
                        onChange={handleinputregister}
                      />
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum laboriosam ad deleniti.
                    </p>
                    <button className="btn transparent" id="sign-in-btn">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignup;