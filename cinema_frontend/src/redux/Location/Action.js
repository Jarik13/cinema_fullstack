import axios from "axios";
import { GET_ALL_LOCATIONS_FAILURE, GET_ALL_LOCATIONS_REQUEST, GET_ALL_LOCATIONS_SUCCESS } from "./ActionType"
import { baseURL } from "@/config/constants";
import { toast } from "react-toastify";


export const getLocationList = () => async (dispatch) => {
    dispatch({ type: GET_ALL_LOCATIONS_REQUEST });

    try {
        const response = await axios.get(`${baseURL}/api/GeneralOperations/get_all_locations`);
        console.log(response);
        dispatch({ type: GET_ALL_LOCATIONS_SUCCESS, payload: response.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: GET_ALL_LOCATIONS_FAILURE });
        toast.error("Faild to get locations!");
    }
}