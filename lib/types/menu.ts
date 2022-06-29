import { NextApiRequest } from "next";
import { TypeSlide } from "./Slide";


// Page Menu

export type Category = 'Todo' | 'Favoritos' | 'Comida' | 'Bebidas' | 'Botanas' | 'Botanas';
export type ByType = 'Recomendados' | 'Mejor Valorado' | 'Menor a Mayor Precio' | 'Mayor a Menor Precio';

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

  