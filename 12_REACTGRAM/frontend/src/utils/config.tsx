import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:4500/api"
});

export const localStorageAuthName = 'authUser';


export const uploads = "http://localhost:4500/uploads";