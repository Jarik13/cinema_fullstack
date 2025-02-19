import { toast } from "react-toastify";
import { APPLY_SUMMER_SALE_FAILURE, APPLY_SUMMER_SALE_SUCCESS, CREATE_SALE_FAILURE, CREATE_SALE_REQUEST, CREATE_SALE_SUCCESS, DELETE_SALE_FAILURE, DELETE_SALE_REQUEST, DELETE_SALE_SUCCESS, GET_SALE_LIST_FAILURE, GET_SALE_LIST_REQUEST, GET_SALE_LIST_SUCCESS, UPDATE_SALE_FAILURE, UPDATE_SALE_REQUEST, UPDATE_SALE_SUCCESS } from "./ActionType"
import axios from "axios";
import { baseURL } from "@/config/constants";

export const createSale = (data) => async (dispatch) => {
    dispatch({ type: CREATE_SALE_REQUEST });

    try {
        const response = await axios.post(`${baseURL}/api/Admin/CreateSale`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        toast.success("Sale created successfully!");
        dispatch({ type: CREATE_SALE_SUCCESS });
    } catch (e) {
        console.log(e);
        dispatch({ type: CREATE_SALE_FAILURE });
        toast.error("Failed to create sale!");
    }
}

export const getSaleList = (showToast) => async (dispatch) => {
    dispatch({ type: GET_SALE_LIST_REQUEST });

    try {
        const { data } = await axios.get(`${baseURL}/api/Admin/ReadSales`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        if (showToast) {
            toast.success("Sale list got successfully!");
        }
        dispatch({ type: GET_SALE_LIST_SUCCESS, payload: data });
    } catch (e) {
        console.log(e);
        dispatch({ type: GET_SALE_LIST_FAILURE });
        if (showToast) {
            toast.error("Failed to get sale list!");
        }
    }
}

export const updateSale = (id, patches) => async (dispatch) => {
    dispatch({ type: UPDATE_SALE_REQUEST });

    try {
        const response = await axios.patch(`${baseURL}/api/Admin/UpdateSale/${id}`, patches, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        toast.success("Sale updated successfully!");
        dispatch({ type: UPDATE_SALE_SUCCESS });
    } catch (e) {
        console.log(e);
        dispatch({ type: UPDATE_SALE_FAILURE });
        toast.error("Failed to update sale!");
    }
}

export const deleteSale = (id) => async (dispatch) => {
    dispatch({ type: DELETE_SALE_REQUEST });

    try {
        const response = await axios.delete(`${baseURL}/api/Admin/DeleteSale/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        toast.success("Sale deleted successfully!");
        dispatch({ type: DELETE_SALE_SUCCESS });
    } catch (e) {
        console.log(e);
        dispatch({ type: DELETE_SALE_FAILURE });
        toast.error("Failed to delete sale!");
    }
}

const applySummerSale = () => async (dispatch) => {
    dispatch({ type: DELETE_SALE_REQUEST });

    try {
        const response = await axios.get(`${baseURL}/api/User/SummerSale`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        toast.success(response?.message || "Sale applied successfully!");
        dispatch({ type: APPLY_SUMMER_SALE_SUCCESS });
    } catch (e) {
        console.log(e);
        dispatch({ type: APPLY_SUMMER_SALE_FAILURE });
        toast.error("Failed to apply sale!");
    }
}