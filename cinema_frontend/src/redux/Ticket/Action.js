import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "@/config/constants";
import { GET_USER_TICKETS_FAILURE, GET_USER_TICKETS_REQUEST, GET_USER_TICKETS_SUCCESS } from "./ActionType";

export const getUserTickets = () => async (dispatch) => {
    dispatch({ type: GET_USER_TICKETS_REQUEST });

    try {
        const { data } = await axios.get(`${baseURL}/api/Ticket/view_all_users_tickets`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        console.log(data);

        dispatch({ type: GET_USER_TICKETS_SUCCESS, payload: data });
    } catch (e) {
        toast(e.data);
        dispatch({ type: GET_USER_TICKETS_FAILURE });
        console.log(e);
    }
}