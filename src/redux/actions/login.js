import {
    GET_LOGIN_REQUESTED,
    GET_LOGOUT_REQUESTED,
    GET_REGISTER_REQUESTED
} from "./types";

export const getLogin = (data) => {

    return {
        type: GET_LOGIN_REQUESTED,
        payload: data
    }
};

export const getLogout = () => {
    console.log("logout")

    return {
        type: GET_LOGOUT_REQUESTED
    }
};


export const getRegister = (data) => {
    console.log("register", data)
    return {
        type: GET_REGISTER_REQUESTED,
        payload: data
    }
}