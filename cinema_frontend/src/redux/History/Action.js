import { toast } from "react-toastify";
import { FILM_HISTORY_FAILURE, FILM_HISTORY_REQUEST, FILM_HISTORY_SUCCESS } from "./ActionType"
import axios from "axios";
import { baseURL } from "@/config/constants";

export const saveFilmToHistory = (id) => async (dispatch) => {
    dispatch({ type: FILM_HISTORY_REQUEST });

    try {
        const response = await axios.post(`${baseURL}/api/History/HistoryOfFilms/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log(response);
        dispatch({ type: FILM_HISTORY_SUCCESS, payload: response?.data });
    } catch (e) {
        console.error(e);
        dispatch({ type: FILM_HISTORY_FAILURE });
        toast.error("Failed to save film to history!");
    }
}