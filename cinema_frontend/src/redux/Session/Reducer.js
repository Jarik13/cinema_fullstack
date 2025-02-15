import { CREATE_SESSION_FAILURE, CREATE_SESSION_REQUEST, CREATE_SESSION_SUCCESS } from "./ActionType";

const initialState = {
    sessions: [],
    loading: false,
    error: null,
};

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SESSION_REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_SESSION_SUCCESS:
            return { ...state, loading: false, sessions: action.payload };
        case CREATE_SESSION_FAILURE:
            return { ...state, loading: false, error: "Faild to get sessions!" };
        default:
            return state;
    }
}