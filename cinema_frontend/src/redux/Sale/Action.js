import { toast } from "react-toastify";
import { CREATE_SALE_FAILURE, CREATE_SALE_REQUEST, CREATE_SALE_SUCCESS } from "./ActionType"
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
        console.log(data);
        dispatch({ type: CREATE_SALE_SUCCESS });
    } catch (e) {
        console.log(e);
        dispatch({ type: CREATE_SALE_FAILURE });
        toast.error("Failed to create sale!");
    }
}