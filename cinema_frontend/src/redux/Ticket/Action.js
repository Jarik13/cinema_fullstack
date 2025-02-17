import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "@/config/constants";
import { BOOK_TICKET_FAILURE, BOOK_TICKET_REQUEST, BOOK_TICKET_SUCCESS, BUY_TICKET_FAILURE, BUY_TICKET_REQUEST, BUY_TICKET_SUCCESS, CANCEL_TICKET_FAILURE, CANCEL_TICKET_REQUEST, GET_TICKETS_BY_SESSION_ID_FAILURE, GET_TICKETS_BY_SESSION_ID_REQUEST, GET_TICKETS_BY_SESSION_ID_SUCCESS, GET_USER_TICKETS_REQUEST, GET_USER_TICKETS_SUCCESS, VIEW_USER_TICKETS_FAILURE, VIEW_USER_TICKETS_REQUEST, VIEW_USER_TICKETS_SUCCESS } from "./ActionType";

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

export const getUserTickets = (showToast) => async (dispatch) => {
    dispatch({ type: GET_USER_TICKETS_REQUEST });

    try {
        const { data } = await axios.get(`${baseURL}/api/Ticket/get_user_tickets`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        dispatch({ type: GET_USER_TICKETS_SUCCESS, payload: data });
        if (showToast) {
            toast.success("Tickets got successfully!");
        }
    } catch (e) {
        toast.error(e.response?.data);
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
        toast.error(e.response?.data);
        dispatch({ type: GET_TICKETS_BY_SESSION_ID_FAILURE });
    }
}

export const bookTickets = (tickets) => async (dispatch) => {
    dispatch({ type: BOOK_TICKET_REQUEST });

    try {
        const { data } = await axios.post(`${baseURL}/api/Ticket/book_ticket`, tickets, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        toast.success(data || "Tickets booked successfully!");
        dispatch({ type: BOOK_TICKET_SUCCESS })
    } catch (e) {
        toast.error(e.response?.data);
        dispatch({ type: BOOK_TICKET_FAILURE });
    }
}

export const buyTickets = (tickets) => async (dispatch) => {
    dispatch({ type: BUY_TICKET_REQUEST });

    try {
        const { data } = await axios.post(`${baseURL}/api/Ticket/buy_ticket`, tickets, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        toast.success(data || "Tickets bought successfully!");
        dispatch({ type: BUY_TICKET_SUCCESS });
    } catch (e) {
        toast.error(e.response?.data);
        dispatch({ type: BUY_TICKET_FAILURE });
    }
}

export const cancelTickets = (tickets) => async (dispatch) => {
    dispatch({ type: CANCEL_TICKET_REQUEST });

    try {
        const { data } = await axios.post(`${baseURL}/api/Ticket/cancel_ticket`, tickets, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        toast.success(data || "Tickets canceled successfully!");
    } catch (e) {
        toast.error(e.response?.data);
        dispatch({ type: CANCEL_TICKET_FAILURE });
    }
}