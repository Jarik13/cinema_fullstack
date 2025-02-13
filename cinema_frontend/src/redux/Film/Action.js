import { toast } from "react-toastify";
import { CREATE_FILM_REQUEST, CREATE_FILM_SUCCESS } from "./ActionType"
import axios from "axios";
import { baseURL } from "@/config/constants";


export const createFilm = (film) => async (dispatch) => {
    dispatch({ type: CREATE_FILM_REQUEST });

    try {
        const { data } = await axios.post(`${baseURL}/api/FilmAdmin/CreateFilm`, film, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        dispatch({
            type: CREATE_FILM_SUCCESS, payload: data,
        });
        console.log(data);
        toast.success('Film created successfully!');
    } catch (e) {
        console.log(e);
        toast.error(e.data);
    }
}