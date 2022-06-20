import {
    GET_LOGIN_FAILURE,
    GET_LOGIN_STARTED,
    GET_LOGIN_SUCCESS,
    GET_LOGOUT_SUCCESS,
    GET_REGISTER_FAILURE,
    GET_REGISTER_SUCCESS
} from "../actions/types"

const initialState = {
    user: [],
    registeruser: [],
    error:[]
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_STARTED:
            return {
                ...state
            }

        case GET_LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                user: action.user
            }
        case GET_LOGIN_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case GET_LOGOUT_SUCCESS:
            return {
                ...state,
                error: null,
                user: null
            }

        case GET_REGISTER_SUCCESS:
            return {
                ...state,
                error: null,
                registeruser: action.user
            }

        case GET_REGISTER_FAILURE:
            return {
                ...state,
                error: action.error,
            }

        default:
            return state
    }

}