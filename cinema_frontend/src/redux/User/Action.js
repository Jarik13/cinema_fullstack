import axios from "axios";
import { GET_USER_LIST_FAILURE, GET_USER_LIST_SUCCESS, UPDATE_USER_PROFILE_REQUEST } from "./ActionType";
import { toast } from "react-toastify";


export const getUserList = () => async (dispatch) => {
    dispatch({ type: UPDATE_USER_PROFILE_REQUEST });

    try {
        const { data } = await axios.get(`http://localhost:5161/api/User/ListOfUsers`);
        console.log(data);
        if (data) {
            dispatch({ type: GET_USER_LIST_SUCCESS, payload: data });
            toast.success("All users getted successfully!");
            return data;
        }
    } catch (e) {
        dispatch({ type: GET_USER_LIST_FAILURE });
        toast.error("Get list of users failed!");
        console.error(e);
        return null;
    }
};
