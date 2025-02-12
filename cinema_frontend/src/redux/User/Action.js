import axios from "axios";
import { GET_USER_LIST_FAILURE, GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, UPDATE_USER_PROFILE_REQUEST } from "./ActionType";
import { toast } from "react-toastify";

export const getUserList = (email) => async (dispatch) => {
    dispatch({ type: GET_USER_LIST_REQUEST });

    try {
        const response = await axios.get(`http://localhost:5161/api/Admin`, {
            params: { email }
        });

        if (response && response.data) {
            dispatch({ type: GET_USER_LIST_SUCCESS, payload: response.data });
            toast.success("All users getted successfully!");
            return response.data;
        }
    } catch (e) {
        dispatch({ type: GET_USER_LIST_FAILURE });
        toast.error("Get list of users failed!");
        return null;
    }
};

