import { makeTupleType } from "utils/customTypes";
import { TypeSlide } from "./Slide";


// Page Menu
export const getCategory = makeTupleType('Todo','Favoritos','Comida','Bebidas','Botanas');
export const getByType = makeTupleType('Recomendados','Mejor Valorado','Menor a Mayor Precio','Mayor a Menor Precio');

export type Category = typeof getCategory[number];
export type ByType = typeof getByType[number];

export interface Order{
    category: Category,
    type: ByType
}
export interface PropsMenu{
    dataCarousel: TypeSlide[],
    MenuProducts: Product[];
}
export interface Product{
    available: boolean,
    category: string,
    details: string,
    discount: number
    id: string,
    image: string,  
    ingredients?: string,
    price: number,
    rating: Rating;
    size: string,
    time: number,
    title: string,
}
export interface Rating{
    rate: number,
    count: number,
}

  