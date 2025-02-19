import { CREATE_SALE_FAILURE, CREATE_SALE_REQUEST, CREATE_SALE_SUCCESS, GET_SALE_LIST_FAILURE, GET_SALE_LIST_REQUEST, GET_SALE_LIST_SUCCESS } from "./ActionType";

const initialState = {
    sales: [],
    loading: false,
    error: null,
};

export const saleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SALE_REQUEST:
        case GET_SALE_LIST_REQUEST:
            return { ...state, loading: true, error: null };
        case CREATE_SALE_SUCCESS:
            return { ...state, loading: false };
        case GET_SALE_LIST_SUCCESS:
            return { ...state, loading: false, sales: action.payload };
        case CREATE_SALE_FAILURE:
            return { ...state, loading: false, error: "Failed to create sale!" };
        case GET_SALE_LIST_FAILURE:
            return { ...state, loading: false, error: "Failed to get sale list!" };
        default:
            return state;
    }
}