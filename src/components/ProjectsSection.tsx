import { ArrowUpRight, MonitorCog } from "lucide-react";
import {
  SiAdguard,
  SiHelm,
  SiKubernetes,
  SiNginx,
  SiNginxproxymanager,
} from "@icons-pack/react-simple-icons";
import { contributions } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

/** Maps each contribution to a locally bundled project mark. */
function ProjectVisual({ name }: { name: string }) {
  const iconProps = {
    size: 64,
    title: "",
    "aria-hidden": true,
    className: "transition-transform duration-300 group-hover:scale-110",
  } as const;

  switch (name) {
    case "Nginx Kubernetes-Ingress":
      return <SiNginx {...iconProps} color="#009639" />;
    case "Helm":
      return <SiHelm {...iconProps} color="#277A9F" />;
    case "Nginx Proxy Manager":
      return <SiNginxproxymanager {...iconProps} color="#F15833" />;
    case "AdGuard Home":
      return <SiAdguard {...iconProps} color="#68BC71" />;
    case "Kubelogin":
      return <SiKubernetes {...iconProps} color="#326CE5" />;
    default:
      return (
        <MonitorCog
          className="size-16 text-signal transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      );
  }
}

const ProjectsSection = () => (
  <section id="open-source" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
    <SectionHeading eyebrow="// open source" title="Lend a hand, take a hand" />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {contributions.map((contribution) => (
        <a
          key={contribution.name}
          href={contribution.url}
          target="_blank"
          rel="noopener noreferrer"
          className="surface-card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:border-signal/50"
        >
          <div
            data-project-visual={contribution.name}
            className="relative grid h-40 place-items-center overflow-hidden border-b border-border bg-secondary/40"
          >
            <div className="grid-backdrop absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-br from-signal/10 via-transparent to-blue-500/10" />
            <div className="relative grid size-24 place-items-center rounded-3xl border border-border/70 bg-background/75 shadow-lg backdrop-blur">
              <ProjectVisual name={contribution.name} />
            </div>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{contribution.name}</h3>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-signal" />
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {contribution.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {contribution.tags.map((tag) => (
                <span key={tag} className="technology-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
