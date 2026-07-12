import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const HeroSection = () => (
  <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
    <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
    <img
      src={heroBackground}
      alt=""
      aria-hidden="true"
      width={1920}
      height={1280}
      decoding="async"
      className="pointer-events-none absolute right-0 top-1/2 hidden w-[58%] -translate-y-1/2 opacity-70 mix-blend-screen lg:block"
    />
    <div className="hero-fade absolute inset-0" aria-hidden="true" />

    <div className="relative mx-auto w-full max-w-6xl px-6 py-28">
      <p className="label-mono hero-enter">{profile.role}</p>
      <h1 className="hero-enter hero-delay-1 mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
        Hi, I&apos;m <span className="text-gradient">{profile.firstName}</span>
        <br />
        Somasundaram
      </h1>
      <p className="hero-enter hero-delay-2 mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        I design resilient cloud architectures, automate infrastructure end-to-end,
        and keep platforms fast and reliable at scale.
      </p>
      <div className="hero-enter hero-delay-3 mt-9 flex flex-wrap items-center gap-3">
        <a
          href="#resume"
          className="glow-ring rounded-full bg-signal px-6 py-3 text-sm font-semibold text-signal-foreground transition-transform hover:-translate-y-0.5"
        >
          View Resume
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          <LinkedInIcon className="size-4" aria-hidden="true" /> LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          <GitHubIcon className="size-4" aria-hidden="true" /> GitHub
        </a>
      </div>
    </div>

    <a
      href="#about"
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-signal"
    >
      <span className="label-mono">scroll</span>
      <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
    </a>
  </section>
);

export default HeroSection;
