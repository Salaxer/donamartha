import axios, { AxiosError } from "axios";

const url = `/api/menu/get`

import { RequestAxios } from "@MyTypes/axios";
import { DataDocsResponse } from "@MyTypes/api";

export const getOrderMenu:RequestAxios["getOrder"] = async (order)=>{
    let response;
    let error;
    try {
         response = await axios.get<DataDocsResponse>(url, {
            params: order,
            headers: { Accept: 'application/json' },
        });
    } catch (e) {
        e instanceof AxiosError ? error = e : error = "Error desconocido";
    }
    return {
        response,
        error,
    }
}