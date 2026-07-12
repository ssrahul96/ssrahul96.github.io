import { describe, expect, test } from "bun:test";

describe("theme backgrounds", () => {
  test("the light theme preserves the grid and hero artwork", async () => {
    const stylesheet = await Bun.file(
      new URL("../src/index.css", import.meta.url),
    ).text();

    expect(stylesheet).toMatch(/\.light \.grid-backdrop[\s\S]*?0\.11/);
    expect(stylesheet).toMatch(/\.hero-background-light[\s\S]*?mix-blend-mode:\s*multiply/);
    expect(stylesheet).toMatch(/\.hero-background-light[\s\S]*?filter:\s*saturate/);
    expect(stylesheet).not.toMatch(/\.light \.hero-background[\s\S]*?filter:/);
    expect(stylesheet).toMatch(/\.light \.hero-fade[\s\S]*?linear-gradient/);
  });
});
