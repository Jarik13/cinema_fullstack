import { 
    CREATE_FILM_FAILURE, CREATE_FILM_REQUEST, CREATE_FILM_SUCCESS, 
    UPDATE_FILM_REQUEST, UPDATE_FILM_SUCCESS, UPDATE_FILM_FAILURE, 
    DELETE_FILM_REQUEST, DELETE_FILM_SUCCESS, DELETE_FILM_FAILURE 
} from "./ActionType";

const initialState = {
    film: null,
    loading: false,
    error: null,
};

export const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FILM_REQUEST:
        case UPDATE_FILM_REQUEST:
        case DELETE_FILM_REQUEST:
            return { ...state, loading: true, error: null };

        case CREATE_FILM_SUCCESS:
        case UPDATE_FILM_SUCCESS:
            return { ...state, loading: false, film: action.payload };

        case DELETE_FILM_SUCCESS:
            return { ...state, loading: false, film: null }; 

        case CREATE_FILM_FAILURE:
        case UPDATE_FILM_FAILURE:
            return { ...state, loading: false, error: "Film operation failed!" };

        case DELETE_FILM_FAILURE:
            return { ...state, loading: false, error: "Delete film failed!" };

        default:
            return state;
    }
};
