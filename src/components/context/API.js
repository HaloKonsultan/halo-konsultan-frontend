import axios from 'axios';

export const SERVER_NAME = "https://api.halokonsultan.me/";
export const BASE_URL = SERVER_NAME + "api/";

export default axios.create({
    baseURL: BASE_URL
});