import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import api, { baseURL, baseURL2 } from "@/config/constants";

export const register = (data) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });

    try {
        const response = await axios.post(`${baseURL}/api/Register`, data);
        if (response) {
            dispatch({ type: REGISTER_SUCCESS, payload: data });
            toast.success("Registration successful!");
        }
    } catch (e) {
        dispatch({ type: REGISTER_FAILURE });
        toast.error("Registration failed. Please try again.");
        console.error(e);
    }
};

export const login = (data) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
        const response = await axios.post(`https://localhost:7057/api/Account/login`, data);

        if (response.data && response.data.Token) {
            const token = response.data.Token;
            localStorage.setItem("token", token);
            dispatch({ type: LOGIN_SUCCESS, payload: token });
            await dispatch(getUserProfile());
            toast.success("Login successful!");
        } else {
            throw new Error("Token not found in response");
        }
    } catch (e) {
        dispatch({ type: LOGIN_FAILURE });
        toast.error("Login failed. Please try again.");
        console.error(e);
    }
};

export const getUserProfile = () => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });

    try {
        const data = await axios.post(`${baseURL2}/api/Account/profile`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        
        console.log(data);
        dispatch({ type: GET_USER_SUCCESS, payload: data });
    } catch (e) {
        console.log(e);
    }
}
