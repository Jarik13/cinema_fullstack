import { toast } from "react-toastify";
import { CREATE_SALE_FAILURE, CREATE_SALE_REQUEST, CREATE_SALE_SUCCESS, GET_SALE_LIST_FAILURE, GET_SALE_LIST_REQUEST, GET_SALE_LIST_SUCCESS } from "./ActionType"
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

export const getSaleList = () => async (dispatch) => {
    dispatch({ type: GET_SALE_LIST_REQUEST });

    try {
        const { data } = await axios.get(`${baseURL}/api/Admin/ReadSales`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        toast.success("Sale list got successfully!");
        dispatch({ type: GET_SALE_LIST_SUCCESS, payload: data });
    } catch (e) {
        console.log(e);
        dispatch({ type: GET_SALE_LIST_FAILURE });
        toast.error("Failed to get sale list!");
    }
}