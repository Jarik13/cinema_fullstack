import { CREATE_SNACK_FAILURE, CREATE_SNACK_REQUEST, CREATE_SNACK_SUCCESS } from "./ActionType";

const initialState = {
    snack: null,
    snacks: [],
    loading: false,
    error: null,
};

export const snackReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SNACK_REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_SNACK_SUCCESS:
            return { ...state, loading: false, snack: action.payload };
        case CREATE_SNACK_FAILURE:
            return { ...state, loading: false, error: "Failed to create snack!" };
        default:
            return state;
    }
}