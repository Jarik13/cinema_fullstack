import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "@/config/constants";
import { BOOK_TICKET_FAILURE, BOOK_TICKET_REQUEST, GET_TICKETS_BY_SESSION_ID_FAILURE, GET_TICKETS_BY_SESSION_ID_REQUEST, GET_TICKETS_BY_SESSION_ID_SUCCESS, VIEW_USER_TICKETS_FAILURE, VIEW_USER_TICKETS_REQUEST, VIEW_USER_TICKETS_SUCCESS } from "./ActionType";

export const viewAllUserTickets = () => async (dispatch) => {
    dispatch({ type: VIEW_USER_TICKETS_REQUEST });

    try {
        const { data } = await axios.get(`${baseURL}/api/Ticket/view_all_users_tickets`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        dispatch({ type: VIEW_USER_TICKETS_SUCCESS, payload: data });
    } catch (e) {
        toast(e.data);
        dispatch({ type: VIEW_USER_TICKETS_FAILURE });
        console.log(e);
    }
}

export const getTicketsBySessionId = (id) => async (dispatch) => {
    dispatch({ type: GET_TICKETS_BY_SESSION_ID_REQUEST });

    try {
        const response = await axios.get(`${baseURL}/api/Ticket/get_session_tickets`, {
            params: {
                sessionId: id,
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        dispatch({ type: GET_TICKETS_BY_SESSION_ID_SUCCESS, payload: response.data });
    } catch (e) {
        console.log(e);
        dispatch({ type: GET_TICKETS_BY_SESSION_ID_FAILURE });
    }
}

export const bookTickets = (tickets) => async (dispatch) => {
    dispatch({ type: BOOK_TICKET_REQUEST });

    try {
        const response = await axios.post(`${baseURL}/api/Ticket/book_ticket`, tickets, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log(response);
        toast.success(response?.data || "Tickets booked successfully!");
    } catch (e) {
        console.log(e);
        dispatch({ type: BOOK_TICKET_FAILURE });
        toast.error("Failed to book tickets!");
    }
}