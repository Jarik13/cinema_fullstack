import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { userReducer } from "./User/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    userReducer: userReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))