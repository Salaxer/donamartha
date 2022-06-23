export interface Product{
    id: string,
    details: string,
    image: string,
    title: string,
    price: number,
    rating: Rating
}

interface Rating{
    rate: number,
    count: number,
}