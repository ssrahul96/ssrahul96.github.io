import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import AboutSection from "../src/components/AboutSection";
import HeroSection from "../src/components/HeroSection";
import Navbar from "../src/components/Navbar";
import ProjectsSection from "../src/components/ProjectsSection";
import ResumeSection from "../src/components/ResumeSection";
import ResumeViewer from "../src/components/ResumeViewer";
import SkillsSection from "../src/components/SkillsSection";
import { contributions, skillGroups } from "../src/data/portfolio";

describe("portfolio rendering", () => {
  test("the navigation renders an accessible identity before animation starts", () => {
    const markup = renderToStaticMarkup(
      <Navbar isDarkTheme={true} toggleTheme={() => undefined} />,
    );

    expect(markup).toContain("Rahul");
    expect(markup).toContain("Rahul Somasundaram — back to top");
  });

  test("the landing page sections expose their navigation targets and updated content", () => {
    const markup = renderToStaticMarkup(
      <main>
        <HeroSection isDarkTheme={true} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
      </main>,
    );

    for (const id of ["top", "about", "skills", "open-source", "resume"]) {
      expect(markup).toContain(`id="${id}"`);
    }

    expect(markup).toContain("hero-bg.jpg");
    expect(markup).toContain("hero-background");
    expect(markup).not.toMatch(/hero-background[^"]*\bhidden\b/);
    expect(markup).toContain("Explore My Experience");

    for (const skill of skillGroups.flatMap((group) => group.skills)) {
      expect(markup).toContain(skill.name);
    }

    for (const contribution of contributions) {
      expect(markup).toContain(contribution.name);
      expect(markup).toContain(`data-project-visual="${contribution.name}"`);
    }

    expect(markup).toContain('src="/assets/img/profile.webp"');
    expect(markup).toContain('alt="Rahul Somasundaram"');
  });

  test("remote URLs are links only and are never required rendering resources", () => {
    const markup = renderToStaticMarkup(
      <main>
        <HeroSection isDarkTheme={true} />
        <ProjectsSection />
      </main>,
    );

    expect(markup).not.toMatch(/<(img|iframe|script)[^>]+https?:\/\//i);
    expect(markup).not.toMatch(/analytics|lovable|telemetry-client|tracking-pixel/i);
  });

  test("skills use locally bundled SVG marks for the requested brands", () => {
    const markup = renderToStaticMarkup(<SkillsSection />);
    const expectedBrandIcons = {
      Java: "java.svg",
      Azure: "azure.svg",
      AWS: "aws.svg",
      HAProxy: "haproxy.svg",
      MSSQL: "mssql.svg",
    } as const;

    for (const [skill, asset] of Object.entries(expectedBrandIcons)) {
      expect(markup).toContain(`data-skill-icon="${skill}"`);
      expect(markup).toContain(asset);
    }

    expect(markup).not.toContain("data-skill-icon-fallback=\"true\"");
    expect(markup).not.toContain("OpenJDK");
  });

  test("the hero selects a dedicated locally bundled image for each theme", () => {
    const darkMarkup = renderToStaticMarkup(<HeroSection isDarkTheme={true} />);
    const lightMarkup = renderToStaticMarkup(<HeroSection isDarkTheme={false} />);

    expect(darkMarkup).toContain("hero-bg.jpg");
    expect(darkMarkup).toContain("hero-background-dark");
    expect(darkMarkup).not.toContain("hero-bg-light.jpg");
    expect(lightMarkup).toContain("hero-bg-light.jpg");
    expect(lightMarkup).toContain("hero-background-light");
    expect(lightMarkup).not.toContain('src="hero-bg.jpg"');
  });

  test("the resume viewer embeds the first-party PDF and supplies a download fallback", () => {
    const markup = renderToStaticMarkup(<ResumeViewer />);

    expect(markup).toContain('data="/assets/docs/rahul_resume_devops.pdf"');
    expect(markup).toContain('href="/assets/docs/rahul_resume_devops.pdf"');
    expect(markup).not.toContain("mozilla.github.io");
  });
});
