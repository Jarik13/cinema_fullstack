import { toast } from "react-toastify";
import { CREATE_SESSION_FAILURE, CREATE_SESSION_REQUEST, CREATE_SESSION_SUCCESS } from "./ActionType"
import axios from "axios";
import { baseURL } from "@/config/constants";


export const createSession = (data) => async (dispatch) => {
    dispatch({ type: CREATE_SESSION_REQUEST });

    try {
        const response = await axios.post(`${baseURL}/api/Admin/CreateSession`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        toast.success("Session created successfully!");
        dispatch({ type: CREATE_SESSION_SUCCESS });
    } catch (e) {
        console.log(e);
        dispatch({ type: CREATE_SESSION_FAILURE });
        toast.error("Failed to create session!");
    }
}