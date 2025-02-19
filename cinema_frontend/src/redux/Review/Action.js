import { toast } from "react-toastify";
import { SEND_REVIEW_FAILURE, SEND_REVIEW_REQUEST, SEND_REVIEW_SUCCESS } from "./ActionType"
import axios from "axios";
import { baseURL } from "@/config/constants";

export const sendReview = (review, id) => async (dispatch) => {
    dispatch({ type: SEND_REVIEW_REQUEST });

    try {
        const { data } = await axios.post(`${baseURL}/api/Review/create_review`, review, {
            params: {
                Filmid: id,
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        dispatch({ type: SEND_REVIEW_SUCCESS, payload: data });
        toast.success("Review sended successfully!");
    } catch (e) {
        console.log(e);
        dispatch({ type: SEND_REVIEW_FAILURE });
        toast.error(e.response.message || "Failed to send review!");
    }
}