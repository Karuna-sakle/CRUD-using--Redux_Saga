import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { GET_DELETE_FAILED, GET_DELETE_REQUESTED, GET_DELETE_SUCCESS } from "../actions/types";


function DeletePostApi(id) {

    const token = localStorage.getItem('user-token');
    console.log("user-token", token)
    return axios.request({

        method: "delete",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        url: `https://react-rails-api-demo.herokuapp.com/api/v1/posts/${id}`,

    })
}

function* FetchDleteUser(action) {
    console.log(23, action)
    try {

        const response = yield call(DeletePostApi, action.payload)
        console.log(response.data)
        yield put({
            type: GET_DELETE_SUCCESS,
            payload: response.data
        })

    } catch (error) {
        yield put({
            type: GET_DELETE_FAILED,
            message: error.message
        })
    }
}

function* DeletePostSaga() {

    yield takeEvery(GET_DELETE_REQUESTED, FetchDleteUser)
}
export default DeletePostSaga;

