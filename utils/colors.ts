interface RGBA{
    r: number,
    g: number,
    b: number,
    /**
     * Only from 0 to 1
     */
    a: number,
}

type RGBTOHEX = string | RGBA;

export function rgbToHex(rgbToHex: RGBTOHEX) {

    let rgbColors:RGBA = { r: 0, g: 0, b: 0, a: 0 };
    let percentage: boolean = false;

	if (typeof rgbToHex === 'string') {
        if(rgbToHex.includes('var')) throw new TypeError('The variables is not accepted because the color is modified');
	    percentage =  isPercent(rgbToHex);
		const objectMatch = isRGBWithValue(rgbToHex);
        if (!objectMatch) throw new TypeError('the input is incorrect');
        rgbColors['r'] = Number(objectMatch[0]);
        rgbColors['g'] = Number(objectMatch[1]);
        rgbColors['b'] = Number(objectMatch[2]);
        rgbColors['a'] = Number(objectMatch[3]) || 1;
    }else{
        rgbColors = rgbToHex;
    }
	if (rgbColors.r > 255 || rgbColors.g > 255 || rgbColors.b > 255) {
		throw new TypeError('Expected three numbers below 256');
	}
	return ((rgbColors['b'] | rgbColors['g'] << 8 | rgbColors['r'] << 16) | 1 << 24).toString(16).slice(1) + getAlpha(rgbColors['a'], percentage);
}

const getAlpha = (alpha: number, isPercent: boolean):string =>{
    if (!isPercent && alpha >= 0 && alpha <= 1) {
        alpha = Math.round(255 * alpha);
    } else if (isPercent && alpha >= 0 && alpha <= 100) {
        alpha = Math.round(255 * alpha / 100);
    } else {
        throw new TypeError(`Expected alpha value (${alpha}) as a fraction or percentage`);
    }

   return (alpha | 1 << 8).toString(16).slice(1); // eslint-disable-line no-mixed-operators
}

export const isPercent = (per: string) => per.includes('%');

export const isHEX = (hex: string):boolean => hex.includes('#');

export const isRGB = (rgb: string):boolean => [3,4].includes(rgb.match(/(0?\.?\d{1,3})%?\b/g)?.length || 0);

export const isRGBWithValue = (rgb: string):false | string[] =>{
    const value =  rgb.match(/(0?\.?\d{1,3})%?\b/g);
    if (!value) return false;
    if (![3,4].includes(value.length)) return false;
    return value;
};