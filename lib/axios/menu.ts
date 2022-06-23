import axios, { AxiosError, AxiosResponseHeaders} from "axios";
import { GlobalResponse } from "lib/types/axios";
import { Product } from "lib/types/Product";

const url = "http://localhost:3000/api/menu/get"

export type Category = 'Todo' | 'Favoritos' | 'Comida' | 'Bebidas' | 'Botanas' | 'Botanas';
export type ByType = 'Recomendados' | 'Mejor Valorado' | 'Menor a Mayor Precio' | 'Mayor a Menor Precio';



export const getNewMenu = async (order: string, type: string): Promise<GlobalResponse<Product[]>> =>{
    let response;
    let error;
    try {
         response = await axios.get<Product[]>(url, {
            data: {
                order,
                type,
            },
            headers: {
                Accept: 'application/json',
            },
        });
    } catch (e) {
        if (e instanceof AxiosError) {
            error = e;
        }else{
            error = "Error desconocido";
        }
    }
    return {
        response,
        error,
    }
}