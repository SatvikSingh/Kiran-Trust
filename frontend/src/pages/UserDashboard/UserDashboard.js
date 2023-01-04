import React, { useEffect, Fragment } from "react";
import "./UserDashboard.css";
import {  useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../Layout/Loader/Loader";
import MetaData from "../Layout/MetaData";
const UserDashboard = () => {
  const history = useNavigate();
  const location = useLocation();
  const {  loading, userInfo, isAuth } = useSelector(
    (state) => state.user
  );
  const redirect = location.search ? location.search.split("=")[1] : "/login";

  useEffect(() => {
    if (isAuth === false) {
      history(redirect);
    }
  }, [history, isAuth]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${userInfo.name}'s Profile`} />
          <div>
            name
            {userInfo.name}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserDashboard;
