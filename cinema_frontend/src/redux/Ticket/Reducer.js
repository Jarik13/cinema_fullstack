import { GET_USER_LIST_FAILURE, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS } from "../User/ActionType";

const initialState = {
    tickets: null,
    loading: false,
    error: null,
};

export const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LIST_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_USER_LIST_SUCCESS:
            return { ...state, loading: false, tickets: action.payload };
        case GET_USER_LIST_FAILURE:
            return { ...state, loading: false, error: "Failed to get tickets!" };
        default:
            return state;
    }
}