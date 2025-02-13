import axios from "axios";
import {
    BLOCK_USER_FAILURE,
    BLOCK_USER_REQUEST,
    BLOCK_USER_SUCCESS,
    GET_USER_LIST_FAILURE,
    GET_USER_LIST_REQUEST,
    GET_USER_LIST_SUCCESS,
    UPDATE_USER_PROFILE_FAILURE,
    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_USER_PROFILE_SUCCESS
} from "./ActionType";
import { toast } from "react-toastify";
import { getUserProfile } from "../Auth/Action";
import { baseURL } from "@/config/constants";

export const updateUserProfile = (email, name, emailValue, age) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_PROFILE_REQUEST });

    try {
        const patches = [];

        if (name) {
            patches.push({ path: "/Name", value: name });
        }
        if (emailValue) {
            patches.push({ path: "/Email", value: emailValue });
        }
        if (age) {
            patches.push({ path: "/Age", value: age });
        }

        if (patches.length === 0) {
            throw new Error("No changes to update");
        }

        const response = await axios.patch(
            `http://localhost:5161/api/Profile/UpdateProfile/${email}`,
            patches,
            {
                headers: {
                    "Content-Type": "application/json-patch+json"
                }
            }
        );

        console.log("Updated:", response.data);

        dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: response.data });
        await dispatch(getUserProfile());
        toast.success("Profile updated successfully!");
    } catch (error) {
        dispatch({ type: UPDATE_USER_PROFILE_FAILURE });
        console.error("Error updating profile:", error);
        toast.error(error.response?.data || "Error updating profile!");
    }
};

export const getUserList = (showToast) => async (dispatch) => {
    dispatch({ type: GET_USER_LIST_REQUEST });

    try {
        const response = await axios.get(`${baseURL}/api/Admin`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        });

        console.log(response);

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
