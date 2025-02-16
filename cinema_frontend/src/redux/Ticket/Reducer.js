import { VIEW_USER_TICKETS_FAILURE, VIEW_USER_TICKETS_REQUEST, VIEW_USER_TICKETS_SUCCESS } from "./ActionType";

const initialState = {
    tickets: [],
    loading: false,
    error: null,
};

export const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_USER_TICKETS_REQUEST:
            return { ...state, loading: true, error: null };
        case VIEW_USER_TICKETS_SUCCESS:
            return { ...state, loading: false, tickets: action.payload };
        case VIEW_USER_TICKETS_FAILURE:
            return { ...state, loading: false, error: "Failed to get tickets!" };
        default:
            return state;
    }
}