import { CREATE_FILM_FAILURE, CREATE_FILM_REQUEST, CREATE_FILM_SUCCESS } from "./ActionType";


const initialState = {
    film: null,
    loading: false,
    error: null,
};

export const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FILM_REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_FILM_SUCCESS:
            return { ...state, loading: false, film: action.payload };
        case CREATE_FILM_FAILURE:
            return { ...state, loading: false, error: "Create film failed!" };
    }
}