import axios from "axios"
import { put, call, takeEvery } from "redux-saga/effects"
import { GET_UPDATE_FAILED, GET_UPDATE_REQUESTED, GET_UPDATE_SUCCESS } from "../actions/types"

function getUpdateApi(data) {
    const token = localStorage.getItem('user-token');
    const user_id = localStorage.getItem('user-id');
    const body = {
        "post":
        {
            "title": data.title,
            "description": data.description,
            "user_id": user_id
        }
    }
    console.log("body", body)

    return axios.request({
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        url: `https://react-rails-api-demo.herokuapp.com/api/v1/posts/${data.user_id}`,
        data: body
    })
}

function* fetchupdateData(action) {
    console.log("fetchpost", action)

    try {
        const response = yield call(getUpdateApi, action.payload)
        console.log("response", response.data)

        yield put({
            type: GET_UPDATE_SUCCESS,
            posts: response.data
        })

    } catch (e) {
        yield put({
            type: GET_UPDATE_FAILED,
            message: e.message
        })
    }
}

function* UpdatePostSaga() {

    yield takeEvery(GET_UPDATE_REQUESTED, fetchupdateData);
};

export default UpdatePostSaga;