import { GET_USER_TICKETS_FAILURE, GET_USER_TICKETS_REQUEST, GET_USER_TICKETS_SUCCESS } from "./ActionType";

const initialState = {
    tickets: [],
    loading: false,
    error: null,
};

export const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_TICKETS_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_USER_TICKETS_SUCCESS:
            return { ...state, loading: false, tickets: action.payload };
        case GET_USER_TICKETS_FAILURE:
            return { ...state, loading: false, error: "Failed to get tickets!" };
        default:
            return state;
    }
}