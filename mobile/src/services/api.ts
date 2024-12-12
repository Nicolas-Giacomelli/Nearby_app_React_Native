import axios from "axios";

export const api = axios.create({
    baseURL:  "http://192.168.237.127:3333",
    timeout: 700,
})