import { getFibonacciNumber } from "../core/fibonacci";

describe("The Fibonacci sequence", () => {
    it("when receives zero returns zero", () => {
        expect(getFibonacciNumber(0)).toBe(0);
    });
    it("when receives one returns one", () => {
        expect(getFibonacciNumber(1)).toBe(1);
    });
});