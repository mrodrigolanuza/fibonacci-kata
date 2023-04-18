import { getFibonacciNumber } from "../core/fibonacci";

describe("The Fibonacci sequence", () => {
    it("when receives zero returns zero", () => {
        expect(getFibonacciNumber(0)).toBe(0);
    });
    it("when receives one returns one", () => {
        expect(getFibonacciNumber(1)).toBe(1);
    });
    it("when any other number than zero or one, returns the sum of the two preceding numbers", () => {
        [2,3,4,5,6].forEach((number)=> 
            expect(getFibonacciNumber(number)).toBe(getFibonacciNumber(number-1)+getFibonacciNumber(number-2)) 
        );
    });
});