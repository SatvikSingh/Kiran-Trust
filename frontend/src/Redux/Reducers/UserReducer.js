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

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true, isAuth: false };
        case LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload, isAuth: true };
        case LOGIN_FAIL:
            return { loading: false, error: action.payload, isAuth: false };
        case REGISTER_REQUEST:
            return { loading: true, isAuth: false };
        case REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload, isAuth: true };
        case REGISTER_FAIL:
            return { loading: false, error: action.payload, isAuth: false };
        case LOAD_REQUEST:
            return { loading: true, isAuth: false };
        case LOAD_SUCCESS:
            return { loading: false, userInfo: action.payload, isAuth: true };
        case LOAD_FAIL:
            return { loading: false, error: action.payload, isAuth: false ,user:null};
        default:
            return state;
    }
};