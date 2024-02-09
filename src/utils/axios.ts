/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { InternalAxiosRequestConfig, Method } from "axios";
import { getStorage } from "./localStorage";

axios.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    const token = getStorage("Token");
    if (token) config.headers.Authorization = `Bearer ${token.token}`;
    return config;
});

export interface IRequestAxios {
    method: Method,
    url: string,
    data?: Record<string, any>
}

const AxiosRequest = async <T>(request: IRequestAxios) => {
    try {
        const { data, status } = await axios({
            url: request.url,
            method: request.method,
            data: request?.data || {}
        });
        return { data: data.data as T, status };
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default AxiosRequest;