import { describe, expect, it } from "vitest";
import { hashId } from "./hashId";

describe("Hash ID Tests", () => {
  it("Should produce 294 for 'abc' string", () => {
    expect(hashId("abc")).toBe(294);
  });

  it("Should produce the same output when given the same input", () => {
    expect(hashId("prod-123")).toBe(hashId("prod-123"));
  });

  it("Should return 0 for empty string", () => {
    expect(hashId("")).toBe(0);
  });
});
