export const arrayAddItem = <T extends unknown>(item: T, array: T[]): T[] =>{
    const newArray =  [...array];
    newArray.push(item);
    return newArray;
}

export const arrayUpdateItem = <T extends unknown>(item: T, array: T[]):T[] =>
[...array]
.map((value) =>{
    return value === item ? item : value
})

export const arrayDeleteItem = <T extends unknown>(item: T, array: T[]):T[] => {
    const newArray = [...array];
    const index = newArray.findIndex((value)=>{
        return value === item;
    })
    newArray.splice(index, 1);
    return newArray;
}
