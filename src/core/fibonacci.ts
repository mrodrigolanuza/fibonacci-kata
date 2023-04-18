export function getFibonacciNumber(number:number){
    if(number === 0)
        return 0;

    if(number === 1)
        return 1;
    
    return getFibonacciNumber(number-1) + getFibonacciNumber(number-2);
}