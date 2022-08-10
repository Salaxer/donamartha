export const makeTupleType = <T extends string[]>(...args: T) => args;

// let name: keyof typeof myObject