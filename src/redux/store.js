import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { loginReducer } from "../redux/reducers/loginReducer"
import { postReducer } from "../redux/reducers/postReducer";
import rootSaga from "./saga";
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    user: loginReducer,
    posts: postReducer,
})

const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga)

export default store;

console.log("store")