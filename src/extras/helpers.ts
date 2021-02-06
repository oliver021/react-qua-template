import { random } from "lodash";

export function generateSerie(min: number, max: number,count: number): number[]{
    const result: number[] = [];
    for (let index = 0; index < count; index++) {
        result.push(random(min, max, false));        
    }
    return result;
}