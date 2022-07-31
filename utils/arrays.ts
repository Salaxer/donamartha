export const arrayAddItem = <T extends unknown>(item: T, array: T[]): T[] =>{
    const newArray =  array.copyWithin(0,0);
    newArray.push(item);
    return newArray;
}

export const arrayUpdateItem = <T extends unknown>(item: T, array: T[]):T[] =>
array
.copyWithin(0,0)
.map((value) =>{
    return value === item ? item : value
})

export const arrayDeleteItem = <T extends unknown>(item: T, array: T[]):T[] => {
    const newArray = array.copyWithin(0,0);
    const index = newArray.findIndex((value)=>{
        return value === item;
    })
    newArray.splice(index, 1);
    return newArray;
}
