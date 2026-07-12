import type { SVGProps } from "react";
import { SiGithub } from "@icons-pack/react-simple-icons";

type SocialIconProps = SVGProps<SVGSVGElement>;

/** Renders the locally bundled GitHub brand mark. */
export function GitHubIcon(props: SocialIconProps) {
  return <SiGithub title="" {...props} />;
}

/** Renders a compact LinkedIn mark without loading a remote icon asset. */
export function LinkedInIcon(props: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
