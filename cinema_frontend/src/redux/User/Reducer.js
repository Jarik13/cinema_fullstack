import { GET_USER_LIST_FAILURE, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, UPDATE_USER_PROFILE_FAILURE, UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS } from "./ActionType";

const initialState = {
    user: null,
    users: [],
    loading: false,
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_PROFILE_REQUEST:
        case GET_USER_LIST_REQUEST:
            return { ...state, loading: true, error: null };
        case UPDATE_USER_PROFILE_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case GET_USER_LIST_SUCCESS:
            return { ...state, loading: false, users: action.payload };
        case UPDATE_USER_PROFILE_FAILURE:
            return { ...state, loading: false, error: "Update prifile failed!" };
        case GET_USER_LIST_FAILURE:
            return { ...state, loading: false, error: "Get list of users failed!" };
        default:
            return state;
    }
}