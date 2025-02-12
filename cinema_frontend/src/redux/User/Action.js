import axios from "axios";
import { BLOCK_USER_FAILURE, BLOCK_USER_REQUEST, BLOCK_USER_SUCCESS, GET_USER_LIST_FAILURE, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, UPDATE_USER_PROFILE_REQUEST } from "./ActionType";
import { toast } from "react-toastify";

export const getUserList = (email, showToast) => async (dispatch) => {
    dispatch({ type: GET_USER_LIST_REQUEST });

    try {
        const response = await axios.get(`http://localhost:5161/api/Admin`, {
            params: { email }
        });

        if (response && response.data) {
            dispatch({ type: GET_USER_LIST_SUCCESS, payload: response.data });

            if (showToast) {
                toast.success("All users getted successfully!");
            }

            return response.data;
        }
    } catch (e) {
        dispatch({ type: GET_USER_LIST_FAILURE });
        toast.error("Get list of users failed!");
        return null;
    }
};


export const blockUser = (adminEmail, userNameToDelete) => async (dispatch) => {
    dispatch({ type: BLOCK_USER_REQUEST });

    try {
        const response = await axios.delete("http://localhost:5161/api/Admin/deleteUser", {
            params: { adminEmail, userNameToDelete }
        });

        if (response && response.data) {
            dispatch({ type: BLOCK_USER_SUCCESS });
            toast.success(response.data || "User blocked successfully!");
        }
    } catch (error) {
        dispatch({ type: BLOCK_USER_FAILURE });

        const errorMessage = error.response?.data || "Failed to block user!";
        toast.error(errorMessage);
    }
};
