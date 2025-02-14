import { toast } from "react-toastify";
import { CREATE_HALL_REQUEST, GET_ALL_HALLS_FAILURE, GET_ALL_HALLS_REQUEST, GET_ALL_HALLS_SUCCESS } from "./ActionType";
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

        const requestData = { 
            ...data, 
            seats_count: String(data.count_of_seats), 
            locationId 
        };

        const response = await axios.post(`${baseURL}/api/Hall/create_hall`, requestData);
        console.log(response);
        toast.success("Hall created successfully!");
    } catch (e) {
        console.error(e);
        dispatch({ type: CREATE_FILM_FAILURE });
        toast.error(e.response?.data || "Failed to create hall.");
    }
};

export const getHallList = () => async (dispatch) => {
    dispatch({ type: GET_ALL_HALLS_REQUEST });

    try {
        const { data } = await axios.get(`${baseURL}/api/Hall/get_halls`);
        console.log(data);
        dispatch({ type: GET_ALL_HALLS_SUCCESS, payload: data });
    } catch (e) {
        console.error(e);
        dispatch({ type: GET_ALL_HALLS_FAILURE });
        toast.error(e.response?.data || "Failed to get hall list.");
    }
}
