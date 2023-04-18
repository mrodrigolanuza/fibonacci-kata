import { getFibonacciNumber } from "../core/fibonacci";

describe("The Fibonacci sequence", () => {
    it("when receives zero returns zero", () => {
        expect(getFibonacciNumber(0)).toBe(0);
    });
});