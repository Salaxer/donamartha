
interface customObject {
    [key: string]: any;
}

type TypeValue = "bigint" | "boolean" | "function" | "number" | "object" | "string" | "symbol" | "undefined";

/**
 * 
 * @param obj an object that require an deep delete of values types inside the object
 * @param type the types that required delete
 * @returns a new object without the values with types specificated in param "type";
 */
export const deleteTypeValues = (obj:customObject, ...type:TypeValue[]):customObject  =>{
    let newObject = {};
    for( const key in obj ){
        if (typeof obj[key] == "object" && !type.includes("object")) { // if exist and object and doesn't omit from the values, so, copy inside the object;
            newObject = {
                ...newObject,
                [key]: deleteTypeValues(obj[key], ...type),
            }
        }else if(!type.includes(typeof obj[key])) { //if the type exist, omit of the new object
            newObject = {
                ...newObject,
                [key]: obj[key],
            }
        }
    }
    return newObject;
}