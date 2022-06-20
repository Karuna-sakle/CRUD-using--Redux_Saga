import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { GET_SHOWPOST_FAILED, GET_SHOWPOST_REQUESTED, GET_SHOWPOST_SUCCESS } from "../actions/types";

function showPostApi(id) {

    const token = localStorage.getItem('user-token');
    console.log("user-token", token)

    return axios.request({
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        url: `https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`
    })
}

function* fetchdata(action) {

    try {
        const response = yield call(showPostApi, action.payload)
        console.log(response.data)
        yield put({
            type: GET_SHOWPOST_SUCCESS,
            posts: response.data
        })

    } catch (e) {
        yield put({
            type: GET_SHOWPOST_FAILED,
            message: e.message
        })
    }
}

function* ShowPostSaga() {

    yield takeEvery(GET_SHOWPOST_REQUESTED, fetchdata)
}
export default ShowPostSaga;
