import axios from "axios"
import { put, call, takeEvery } from "redux-saga/effects"
import { CREATE_POST_FAILURE, CREATE_POST_SUCCESS, CREATE_POST_REQUESTED } from "../actions/types"

function getPostApi(data) {
    console.log("getPostapi", data)

    const token = localStorage.getItem('user-token');
    console.log("user-token", token)

    const user_id = localStorage.getItem('user-id');
    console.log("user-id", user_id)

    const body = {
        "post": {
            "title": data.title,
            "description": data.description,
            "user_id":user_id
        }
    }
    return axios.request({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        url: "https://react-rails-api-demo.herokuapp.com/api/v1/posts",
        data: body
    })
}

function* fetchPostData(action) {
    console.log("fetchpost", action)
    try {
        const response = yield call(getPostApi, action.payload)
        console.log("response", response.data)
        
        yield put({
            type: CREATE_POST_SUCCESS,
            posts: response.data
        })

    } catch (e) {
        yield put({
            type: CREATE_POST_FAILURE,
            message: e.message
        })
    }
}

function* cretePostSaga() {
   
    yield takeEvery(CREATE_POST_REQUESTED, fetchPostData);
};

export default cretePostSaga;