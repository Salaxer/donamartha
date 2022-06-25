import { AxiosResponse, AxiosError } from "axios";
import { DataDocsResponse } from "./api";
import { Order } from "./menu";

export interface GlobalAxiosResponse<T = any>{
    response: AxiosResponse<T> | undefined,
    error: AxiosError | string | undefined,
}

export interface RequestAxios{
    getOrder<T = any>(order:Order): Promise<GlobalAxiosResponse<DataDocsResponse<T>>>;
}