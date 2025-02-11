import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { baseURL } from "@/config/constants";

export const register = (data) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const response = await axios.post(`${baseURL}/api/Register`, data);
        if (response) {
            dispatch({ type: REGISTER_SUCCESS, payload: data });
            toast.success("Registration successful!");
        }
        console.log("Register success: ", response);
    } catch (e) {
        dispatch({ type: REGISTER_FAILURE });
        toast.error("Registration failed. Please try again.");
        console.error(e.response ? e.response.data : e);  // Додаткове логування помилки
    }
    
};
