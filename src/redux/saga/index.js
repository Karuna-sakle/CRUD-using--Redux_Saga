import { all } from "redux-saga/effects";
import DeletePostSaga from "./deletePostSaga";
import GetPostSaga from "./getPostSaga";
import userSaga from "./loginSaga";
import cretePostSaga from "./postSaga";
import UserRegisterSaga from "./registersaga";
import ShowPostSaga from "./showPostSaga";
import UpdatePostSaga from "./updatePostSaga";

export default function* rootSaga(){
    yield all([
        userSaga(),
        UserRegisterSaga(),
        cretePostSaga(),
        GetPostSaga(),
        DeletePostSaga(),
        UpdatePostSaga(),
        ShowPostSaga(),
        
    ])
}