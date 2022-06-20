import { CREATE_POST_REQUESTED, GET_DELETE_REQUESTED, GET_POST_REQUESTED, GET_SHOWPOST_REQUESTED, GET_UPDATE_REQUESTED } from "./types"


export const createPost = (data) => {
    console.log("getpost", data)
    
    return {
        type: CREATE_POST_REQUESTED,
        payload: data
    }
}

export const getPost = () => {

    return {
        type: GET_POST_REQUESTED
    }
}

export const deletePost = (id) => {

    return {
        type: GET_DELETE_REQUESTED,
        payload: id
    }
}

export const updatePost = (data) => {
    return {
        type: GET_UPDATE_REQUESTED,
        payload: data
    } 

}
export const showPost = (id) => {
    return {
        type: GET_SHOWPOST_REQUESTED,
        payload: id
    }

}