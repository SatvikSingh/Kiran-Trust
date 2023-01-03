import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOAD_REQUEST,
    LOAD_SUCCESS,
    LOAD_FAIL
} from '../Constants/UserConstants';
import Axios from 'axios';

export const loginAction = (user) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await Axios.post("http://localhost:3601/user/login", user, config);
        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (err) {
        dispatch({ type: LOGIN_FAIL, payload: err.response.data.message });
    }
};

export const registerAction = (user) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await Axios.post("http://localhost:3601/user/signup", user, config);
        dispatch({ type: REGISTER_SUCCESS, payload: data.user });
    } catch (err) {
        dispatch({ type: REGISTER_FAIL, payload: err.response.data.message });
    }
};

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_REQUEST });
        const { data } = await Axios.get("http://localhost:3601/user/userdetail");
        dispatch({ type: LOAD_SUCCESS, payload: data.user });
    } catch (err) {
        dispatch({ type: LOAD_FAIL, payload: err.response.data.message });
    }
}