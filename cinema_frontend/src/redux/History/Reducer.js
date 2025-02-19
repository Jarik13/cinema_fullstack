import { FILM_HISTORY_FAILURE, FILM_HISTORY_REQUEST, FILM_HISTORY_SUCCESS, GET_USER_FILM_HISTORY_FAILURE, GET_USER_FILM_HISTORY_REQUEST, GET_USER_FILM_HISTORY_SUCCESS, GET_USER_TICKET_HISTORY_FAILURE, GET_USER_TICKET_HISTORY_REQUEST, GET_USER_TICKET_HISTORY_SUCCESS } from "./ActionType";

const initialState = {
    history: null,
    histories: [],
    loading: false,
    error: null,
};

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILM_HISTORY_REQUEST:
        case GET_USER_FILM_HISTORY_REQUEST:
        case GET_USER_TICKET_HISTORY_REQUEST:
            return { ...state, loading: true, error: null };
        case FILM_HISTORY_SUCCESS:
            return { ...state, loading: false, history: action.payload };
        case GET_USER_FILM_HISTORY_SUCCESS:
        case GET_USER_TICKET_HISTORY_SUCCESS:
            return { ...state, loading: false, histories: action.payload };
        case FILM_HISTORY_FAILURE:
            return { ...state, loading: false, error: "Failed to save film to history!" };
        case GET_USER_FILM_HISTORY_FAILURE:
            return { ...state, loading: false, error: "Failed to get user films history!" };
        case GET_USER_TICKET_HISTORY_FAILURE:
            return { ...state, loading: false, error: "Failed to get user tickets history!" };
        default:
            return state;
    }
}