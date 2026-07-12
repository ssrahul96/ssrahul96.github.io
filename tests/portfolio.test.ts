import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import {
  contributions,
  experience,
  navLinks,
  profile,
  skillGroups,
} from "../src/data/portfolio";

describe("portfolio content", () => {
  test("skill names are unique and the portfolio includes a substantial toolset", () => {
    const skills = skillGroups.flatMap((group) => group.skills);
    const names = skills.map((skill) => skill.name);

    expect(new Set(names).size).toBe(names.length);
    expect(skills.length).toBeGreaterThanOrEqual(25);
  });

  test("AI-assisted engineering lists the current coding assistants", () => {
    const aiTools = skillGroups.find(
      (group) => group.title === "AI-Assisted Engineering",
    );

    expect(aiTools?.skills.map((skill) => skill.name)).toEqual([
      "Claude Code",
      "OpenAI Codex",
      "Cursor",
      "Gemini",
    ]);
  });

  test("documentation includes every AI-assisted engineering tool", () => {
    const documentationFiles = [
      new URL("../README.md", import.meta.url),
      new URL("../public/llms.txt", import.meta.url),
    ];
    const aiTools = ["Claude Code", "OpenAI Codex", "Cursor", "Gemini"];

    for (const documentationFile of documentationFiles) {
      const content = readFileSync(documentationFile, "utf8");

      expect(content).toContain("AI-Assisted Engineering");
      expect(content).toContain("Cloudflare");
      for (const tool of aiTools) {
        expect(content).toContain(tool);
      }
    }
  });

  test("navigation links target unique sections rendered by the portfolio", () => {
    const hrefs = navLinks.map((link) => link.href);

    expect(new Set(hrefs).size).toBe(hrefs.length);
    expect(hrefs).toEqual(["#about", "#skills", "#open-source", "#resume"]);
  });

  test("public profile and contribution links use secure destinations", () => {
    const externalLinks = [
      profile.linkedin,
      profile.github,
      ...contributions.map((contribution) => contribution.url),
    ];

    expect(externalLinks.every((url) => url.startsWith("https://"))).toBe(true);
    expect(new Set(externalLinks).size).toBe(externalLinks.length);
  });

  test("experience is reverse chronological and includes the current role", () => {
    expect(experience[0]).toMatchObject({
      company: "Wayfair",
      period: "2025 — Present",
    });
    expect(experience.every((role) => role.highlights.length > 0)).toBe(true);
  });
});
