import { describe, expect, test } from "bun:test";
import {
  contributions,
  experience,
  navLinks,
  profile,
  skillGroups,
} from "../src/data/portfolio";

describe("portfolio content", () => {
  test("skill names are unique and proficiency levels stay within valid bounds", () => {
    const skills = skillGroups.flatMap((group) => group.skills);
    const names = skills.map((skill) => skill.name);

    expect(new Set(names).size).toBe(names.length);
    expect(skills.length).toBeGreaterThanOrEqual(25);
    expect(skills.every((skill) => skill.level >= 0 && skill.level <= 100)).toBe(true);
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
