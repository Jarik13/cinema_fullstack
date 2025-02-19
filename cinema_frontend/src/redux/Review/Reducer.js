import { GET_REVIEWS_BY_FILM_ID_FAILURE, GET_REVIEWS_BY_FILM_ID_REQUEST, GET_REVIEWS_BY_FILM_ID_SUCCESS, SEND_REVIEW_FAILURE, SEND_REVIEW_REQUEST, SEND_REVIEW_SUCCESS } from "./ActionType";

const initialState = {
    review: null,
    reviews: [],
    loading: false,
    error: null,
};

export const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_REVIEW_REQUEST:
        case GET_REVIEWS_BY_FILM_ID_REQUEST:
            return { ...state, loading: true, error: null };
        case SEND_REVIEW_SUCCESS:
            return { ...state, loading: false, review: action.payload };
        case GET_REVIEWS_BY_FILM_ID_SUCCESS:
            return { ...state, loading: false, reviews: action.payload };
        case SEND_REVIEW_FAILURE:
            return { ...state, loading: false, error: "Failed to send review!" };
        case GET_REVIEWS_BY_FILM_ID_FAILURE:
            return { ...state, loading: false, error: "Failed to get reviews list by film!" };
        default:
            return state;
    }
}