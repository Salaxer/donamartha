export interface Product{
    id: number,
    image: string,
    title: string,
    price: number,
    rating: Rating
}

interface Rating{
    rate: number,
    count: number,
}