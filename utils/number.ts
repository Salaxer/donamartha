
export const discount = (price: number,discount: number):number =>{
    const res = price*(discount/100);
    return price - res;
}