import { CREATE_SALE_FAILURE, CREATE_SALE_REQUEST, CREATE_SALE_SUCCESS } from "./ActionType";

const initialState = {
    sales: [],
    loading: false,
    error: null,
};

export const saleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SALE_REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_SALE_SUCCESS:
            return { ...state, loading: false };
        case CREATE_SALE_FAILURE:
            return { ...state, loading: false, error: "Failed to create sale!" };
        default:
            return state;
    }
}