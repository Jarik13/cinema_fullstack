import axios from "axios";
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import { baseURL } from "@/config/constants";

export const register = (data) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const response = await axios.post(`${baseURL}/api/Register`, data);
        if (response) {
            dispatch({ type: REGISTER_SUCCESS, payload: data });
        }
        console.log("Register success: ", response);
    } catch (e) {
        dispatch({ type: REGISTER_FAILURE })
        console.log(e);
    }
}