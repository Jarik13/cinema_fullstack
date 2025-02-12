import { UPDATE_USER_PROFILE_FAILURE, UPDATE_USER_PROFILE_REQUEST, UPDATE_USER_PROFILE_SUCCESS } from "./ActionType";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_PROFILE_REQUEST:
            return { ...state, loading: true, error: null };
        case UPDATE_USER_PROFILE_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case UPDATE_USER_PROFILE_FAILURE:
            return { ...state, loading: false, error: "Update prifile failed" };
        default:
            return state;
    }
}