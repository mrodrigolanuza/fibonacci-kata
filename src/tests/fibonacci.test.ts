import { getFibonacciNumber } from "../core/fibonacci";

describe("The Fibonacci sequence", () => {
    it("when receives zero returns zero", () => {
        expect(getFibonacciNumber(0)).toBe(0);
    });
    it("when receives one returns one", () => {
        expect(getFibonacciNumber(1)).toBe(1);
    });
    it("when any other number than zero or one, returns the sum of the two preceding numbers", () => {
        expect(getFibonacciNumber(2)).toBe(1);
        expect(getFibonacciNumber(3)).toBe(getFibonacciNumber(2)+getFibonacciNumber(1));
    });
});