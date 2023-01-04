import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from "../Constants/UserConstants";
import Axios from "axios";

export const loginAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      withCredentials: true,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await Axios.post(
      `/user/login`,
      user,
      config,
      { withCredentials: true, credentials: "include" }
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
  }
};

export const registerAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const config = {
      withCredentials: true,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await Axios.post(
      `/user/signup`,
      user,
      config,
      { withCredentials: true, credentials: "include" }
    );
    dispatch({ type: REGISTER_SUCCESS, payload: data.user });
  } catch (err) {
    dispatch({ type: REGISTER_FAIL, payload: err.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_REQUEST });
    const config = {
      withCredentials: true,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await Axios.get(
      `/user/userdetail`,
      config,
      { withCredentials: true, credentials: "include" }
    );
    dispatch({ type: LOAD_SUCCESS, payload: data.user });
  } catch (err) {
    dispatch({ type: LOAD_FAIL, payload: err.response.data.message });
  }
};
