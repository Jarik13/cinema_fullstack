import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, loading: true, error: null };
        case REGISTER_SUCCESS:
            return { ...state, loading: false, user: action.payload, isAuthenticated: true };
        case REGISTER_FAILURE:
            return { ...state, loading: false, error: "Registration failed" };
        default:
            return state;
    }
};
