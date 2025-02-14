import { CREATE_HALL_FAILURE, CREATE_HALL_REQUEST, CREATE_HALL_SUCCESS, GET_ALL_HALLS_FAILURE, GET_ALL_HALLS_REQUEST, GET_ALL_HALLS_SUCCESS, OPEN_HALL_FAILURE, OPEN_HALL_REQUEST } from "./ActionType";

const initialState = {
    hall: null,
    halls: [],
    loading: false,
    error: null,
    openingHall: false,
};

export const hallReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_HALL_REQUEST:
        case GET_ALL_HALLS_REQUEST:
        case OPEN_HALL_REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_HALL_SUCCESS:
            return { ...state, loading: false, hall: action.payload };
        case GET_ALL_HALLS_SUCCESS:
            return { ...state, loading: false, halls: action.payload };
        case OPEN_HALL_SUCCESS:
            return { ...state, openingHall: true }
        case CREATE_HALL_FAILURE:
            return { ...state, loading: false, error: "Failed to create hall!" };
        case GET_ALL_HALLS_FAILURE:
            return { ...state, loading: false, error: "Failed to get hall list!" };
        case OPEN_HALL_FAILURE:  
            return { ...state, openingHall: false, error: "Failed to open hall!" };
        default:
            return state;
    }
}