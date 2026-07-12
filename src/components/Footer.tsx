import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto max-w-6xl px-6 py-16 text-center">
      <p className="label-mono">// let&apos;s build something reliable</p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-4 inline-block text-2xl font-semibold text-gradient sm:text-3xl"
      >
        {profile.email}
      </a>
      <div className="mt-8 flex items-center justify-center gap-4">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="footer-link"
        >
          <LinkedInIcon className="size-5" aria-hidden="true" />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="footer-link"
        >
          <GitHubIcon className="size-5" aria-hidden="true" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="footer-link">
          <Mail className="size-5" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. Built for scale.
      </p>
    </div>
  </footer>
);

export default Footer;
