import { BOOK_TICKET_FAILURE, BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, VIEW_USER_TICKETS_FAILURE, VIEW_USER_TICKETS_REQUEST, VIEW_USER_TICKETS_SUCCESS } from "./ActionType";

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
        case BOOK_TICKET_REQUEST:
            return { ...state, loading: true, bookingError: null };
        case BOOK_TICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                tickets: [...state.tickets, action.payload] 
            };
        case BOOK_TICKET_FAILURE:
            return { ...state, loading: false, error: "Failed to book ticket!" };
        default:
            return state;
    }
}