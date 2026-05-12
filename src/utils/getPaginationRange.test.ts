import { describe, expect, it } from "vitest";
import { getPaginationRange } from "./getPaginationRange";

describe("Pagination Range Tests", () => {
  it("Should return all pages when total <= window + 2", () => {
    expect(getPaginationRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('Should display "..." at start when the current page is at the end', () => {
    const result = getPaginationRange(20, 20);
    expect(result[0]).toBe(1);
    expect(result[1]).toBe("...");
  });

  it("Should always show the first and last pages", () => {
    const result = getPaginationRange(20, 50);
    expect(result[0]).toBe(1);
    expect(result[result.length - 1]).toBe(50);
  });
});
