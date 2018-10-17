import axios, { AxiosInstance } from 'axios';

export const lockerDataAxios: AxiosInstance = axios.create({
    baseURL: "https://api.backend.airspace.travel",
    timeout: 2000,
    headers: { Accept: 'application/json' }
});