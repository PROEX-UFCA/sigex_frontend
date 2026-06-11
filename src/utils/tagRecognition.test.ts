import { describe, expect, it } from "vitest";
import recognizeTags from "./tagRecognition";

describe("Tag Recognition Tests", () => {
  it('Recognizes "Tecnologia da Informação"', () => {
    expect(recognizeTags(["Tecnologia da Informação"])).toEqual([
      { tagType: "Tecnologia" },
    ]);
  });

  it('Generates multiple tags for "Educação e Cultura"', () => {
    const result = recognizeTags(["Educação e Cultura"]);
    expect(result).toContainEqual({ tagType: "Cultura" });
    expect(result).toContainEqual({ tagType: "Educação" });
  });

  it("Should be case-insensitive", () => {
    expect(recognizeTags(["TECNOLOGIA"])).toEqual([{ tagType: "Tecnologia" }]);
  });

  it("Should return fallback value when given a string without category", () => {
    expect(recognizeTags(["Equidade"])).toEqual([{ tagType: "null" }]);
  });

  it("Should not raise an error when given an empty array", () => {
    expect(recognizeTags([])).toEqual([{ tagType: "null" }]);
  });
});
