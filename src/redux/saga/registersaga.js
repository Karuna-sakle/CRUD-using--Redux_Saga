import axios from "axios"
import { put, call, takeEvery } from "redux-saga/effects"
import {
    GET_REGISTER_FAILURE,
    GET_REGISTER_REQUESTED,
    GET_REGISTER_SUCCESS
} from "../actions/types"

function getRegisterApi(data) {
    console.log("getregisterapi", data)

    const body = {
        "user": {
            "email": data.email,
            "password": data.password,
            "password_confirmation": data.confirmPassword
        }
    }
    return axios.request({
        method: "post",
        url: "https://react-rails-api-demo.herokuapp.com/api/v1/signup",
        data: body

    })
}

function* fetchUser(action) {
    console.log("fetchuser", action)
    try {
        const response = yield call(getRegisterApi, action.payload)
        console.log(7676, response)
        localStorage.setItem('user-info', JSON.stringify(response.data));
        localStorage.setItem('user-token', response.data.token);
        localStorage.setItem('user-id', JSON.stringify(response.data.user.id));
        yield put({
            type: GET_REGISTER_SUCCESS, user: response.data
        })

    } catch (e) {
        yield put({
            type: GET_REGISTER_FAILURE, message: e.message
        })
    }
}

function* UserRegisterSaga() {
    yield takeEvery(GET_REGISTER_REQUESTED, fetchUser);
};

export default UserRegisterSaga;