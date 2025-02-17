import {
    BOOK_TICKET_FAILURE, BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS,
    GET_TICKETS_BY_SESSION_ID_FAILURE, GET_TICKETS_BY_SESSION_ID_REQUEST, GET_TICKETS_BY_SESSION_ID_SUCCESS,
    GET_USER_TICKETS_FAILURE,
    GET_USER_TICKETS_REQUEST,
    GET_USER_TICKETS_SUCCESS,
    VIEW_USER_TICKETS_FAILURE, VIEW_USER_TICKETS_REQUEST, VIEW_USER_TICKETS_SUCCESS
} from "./ActionType";

const initialState = {
    tickets: [],
    loading: false,
    error: null,
};

export const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_USER_TICKETS_REQUEST:
        case GET_TICKETS_BY_SESSION_ID_REQUEST:
        case GET_USER_TICKETS_REQUEST:
            return { ...state, loading: true, error: null };
        case VIEW_USER_TICKETS_SUCCESS:
        case GET_TICKETS_BY_SESSION_ID_SUCCESS:
        case GET_USER_TICKETS_SUCCESS:
            return { ...state, loading: false, tickets: action.payload };
        case VIEW_USER_TICKETS_FAILURE:
        case GET_TICKETS_BY_SESSION_ID_FAILURE:
        case GET_USER_TICKETS_FAILURE:
            return { ...state, loading: false, error: "Failed to get tickets!" };
        case BOOK_TICKET_REQUEST:
            return { ...state, loading: true, error: null };
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