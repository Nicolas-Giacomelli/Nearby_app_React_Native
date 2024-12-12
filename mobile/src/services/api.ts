import axios from "axios";

export const api = axios.create({
    baseURL:  "http://10.7.194.52:3333",
    timeout: 700,
})