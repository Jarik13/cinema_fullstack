import { toast } from "react-toastify";
import { CREATE_SNACK_FAILURE, CREATE_SNACK_REQUEST, CREATE_SNACK_SUCCESS } from "./ActionType"
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
        console.log(data);
        dispatch({ type: CREATE_SNACK_SUCCESS, payload: data });
    } catch (e) {
        console.log(e);
        dispatch({ type: CREATE_SNACK_FAILURE });
        toast.error(e.response?.message || "Failed to create snack!");
    }
}