import { AxiosResponse, AxiosError } from "axios";

export interface GlobalResponse<T = any>{
    response: AxiosResponse<T> | undefined,
    error: AxiosError | string | undefined,
}