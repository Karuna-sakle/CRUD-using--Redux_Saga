import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { GET_POST_SUCCESS, GET_POST_FAILURE, GET_POST_REQUESTED } from "../actions/types";

function GetPostApi() {

    const token = localStorage.getItem('user-token');
    console.log("user-token", token)

    return axios.request({
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        url: "https://react-rails-api-demo.herokuapp.com/api/v1/posts"
    })
}

function* fetchdata(action) {

    try {
        const response = yield call(GetPostApi, action.payload)
        console.log(response.data)
        yield put({
            type: GET_POST_SUCCESS,
            posts: response.data
        })

    } catch (e) {
        yield put({
            type: GET_POST_FAILURE,
            message: e.message
        })
    }
}

function* GetPostSaga() {

    yield takeEvery(GET_POST_REQUESTED, fetchdata)
}
export default GetPostSaga;

// function* Get_Api(){
//     
//         try {
//             const data = yield call(axios.get,'https://jsonplaceholder.typicode.com/posts')
//             yield put ({
//                 type: Get_data,
//                 payload:data
//             })
//             
//         } catch (e) {
//           console.log(e.message)
//           }
//         }
//     call(baseurl,'/posts')
