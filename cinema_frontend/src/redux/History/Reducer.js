import { FILM_HISTORY_FAILURE, FILM_HISTORY_REQUEST, FILM_HISTORY_SUCCESS } from "./ActionType";

const initialState = {
    history: null,
    loading: false,
    error: null,
};

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILM_HISTORY_REQUEST:
            return { ...state, loading: true, error: null };
        case FILM_HISTORY_SUCCESS:
            return { ...state, loading: false, history: action.payload };
        case FILM_HISTORY_FAILURE:
            return { ...state, loading: false, error: "Failed to save film to history!" };
        default:
            return state;
    }
}