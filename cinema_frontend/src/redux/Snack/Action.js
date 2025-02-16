import { toast } from "react-toastify";
import { CREATE_SNACK_FAILURE, CREATE_SNACK_REQUEST, CREATE_SNACK_SUCCESS, DELETE_SNACK_FAILURE, DELETE_SNACK_REQUEST, DELETE_SNACK_SUCCESS, GET_SNACK_LIST_FAILURE, GET_SNACK_LIST_REQUEST, GET_SNACK_LIST_SUCCESS } from "./ActionType"
import axios from "axios";
import { baseURL } from "@/config/constants";

export const createSnack = (snack) => async (dispatch) => {
    dispatch({ type: CREATE_SNACK_REQUEST });

    try {
        const { data } = await axios.post(`${baseURL}/api/Snack/create_snack`, snack, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        dispatch({ type: CREATE_SNACK_SUCCESS, payload: data });
        toast.success("Snack created successfully!");
    } catch (e) {
        console.log(e);
        dispatch({ type: CREATE_SNACK_FAILURE });
        toast.error(e.response?.message || "Failed to create snack!");
    }
}

export const getSnackList = (showToast) => async (dispatch) => {
    dispatch({ type: GET_SNACK_LIST_REQUEST });

    try {
        const { data } = await axios.get(`${baseURL}/api/Snack/get_all_snacks`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        dispatch({ type: GET_SNACK_LIST_SUCCESS, payload: data });
        if (showToast) {
            toast.success("All snacks getted successfully!");
        }
    } catch (e) {
        console.log(e);
        dispatch({ type: GET_SNACK_LIST_FAILURE });
        toast.error(e.response?.message || "Failed to get snack list!");
    }
}

export const deleteSnack = (id) => async (dispatch) => {
    dispatch({ type: DELETE_SNACK_REQUEST });

    try {
        const { data } = await axios.delete(`${baseURL}/api/Snack/delete_snack/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        dispatch({ type: DELETE_SNACK_SUCCESS});
        toast.success(data || "Snack deleted successfully!");
    } catch (e) {
        console.log(e);
        dispatch({ type: DELETE_SNACK_FAILURE });
        toast.error(e.response?.message || "Failed to delete snack!");
    }
}