import axios from "axios";

export const baseURL = "http://localhost:5161";
export const baseURL2 = "https://localhost:7057";



























const api = axios.create({ baseURL: baseURL2 });
const token = localStorage.getItem("token");

api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
api.defaults.headers.post["Content-Type"] = "application/json";

export default api;
