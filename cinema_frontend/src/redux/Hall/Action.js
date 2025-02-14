import { toast } from "react-toastify";
import { CREATE_HALL_REQUEST } from "./ActionType";
import { CREATE_FILM_FAILURE } from "../Film/ActionType";
import axios from "axios";
import { baseURL } from "@/config/constants";

export const createHall = (data) => async (dispatch, getState) => {
    dispatch({ type: CREATE_HALL_REQUEST });

    try {
        const state = getState();
        const locationId = state.location?.selectedLocation?.id;

        if (!locationId) {
            throw new Error("Location ID is missing.");
        }

        const requestData = { ...data, locationId };

        const response = await axios.post(`${baseURL}/api/Hall/create_hall`, requestData);
        console.log(response);
        toast.success("Hall created successfully!");
    } catch (e) {
        console.error(e);
        dispatch({ type: CREATE_FILM_FAILURE });
        toast.error(e.message || "Failed to create hall.");
    }
};
