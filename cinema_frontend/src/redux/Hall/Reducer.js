import { CREATE_HALL_FAILURE, CREATE_HALL_REQUEST, CREATE_HALL_SUCCESS } from "./ActionType";

const initialState = {
    hall: null,
    halls: [],
    loading: false,
    error: null,
};

export const hallReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_HALL_REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_HALL_SUCCESS:
            return { ...state, loading: false, hall: action.payload };
        case CREATE_HALL_FAILURE:
            return { ...state, loading: false, error: "Failed to create hall!" };
        default:
            return state;
    }
}