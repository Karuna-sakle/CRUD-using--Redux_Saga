import {
    CREATE_POST_FAILURE,
    CREATE_POST_SUCCESS,
    GET_DELETE_FAILED,
    GET_DELETE_SUCCESS,
    GET_POST_FAILURE,
    GET_POST_SUCCESS,
    GET_SHOWPOST_FAILED,
    GET_SHOWPOST_SUCCESS,
    GET_UPDATE_FAILED,
    GET_UPDATE_SUCCESS
} from "../actions/types"

const initState = {
    posts: [],
    dele: [],
    updt: [],
    singleUser:[],
}

export const postReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                error: null,
                posts: action.payload
            }

        case CREATE_POST_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case GET_POST_SUCCESS:
            return ({
                ...state,
                posts: action.posts
            })

        case GET_POST_FAILURE:
            return ({
                ...state,
                error: action.error
            })
        case GET_DELETE_SUCCESS:
            return {
                ...state,
                dele: action.payload
            }

        case GET_DELETE_FAILED:
            return ({
                ...state,
                error: action.error
            })
        case GET_SHOWPOST_SUCCESS:
            return ({
                ...state,
                error: null,
                singleUser: action.posts
            })

        case GET_SHOWPOST_FAILED:
            return ({
                ...state,
                error: action.error
            })

        case GET_UPDATE_SUCCESS:
            return ({
                updt: action.payload,
            })

        case GET_UPDATE_FAILED:
            return ({
                ...state,
                error: action.error

            })

        default:
            return state
    }

}

