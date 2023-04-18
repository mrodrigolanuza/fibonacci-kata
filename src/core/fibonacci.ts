export function getFibonacciNumber(number:number){
    if(number === 0)
        return 0;

    if(number === 1)
        return 1;
    
    return (number-1)+(number-2);
}