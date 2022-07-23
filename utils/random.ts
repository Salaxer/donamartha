interface OptionsRandom {
    min: number;
    max:number;
    nDigit: number;
}
/**
 * 
 * @param options  if you set options, so you need to add the range of the values and the number of digits
 * @returns a random value from 0 to 1 with 3 digits
 */
export const random = (options?: OptionsRandom): number => {
    if(!options) options = getOptions();
    const { max, min, nDigit} = options;
    if (min >= max){ console.error("value min:",min,"must be less than max:", max) ;return 0}
    if (nDigit < 1){ console.error("value nDigit:", nDigit, "must be greater or equal than 1") ;return 0}

    const date:number = (new Date()).getTime();
    const random = Number(date.toString().split('').reverse().join('').slice(0, nDigit));
    console.log('my',random);
    console.log('Math', Math.random());
    
    return 0;

}
const getOptions = (): OptionsRandom => ({ max:1, min: 0, nDigit: 3})