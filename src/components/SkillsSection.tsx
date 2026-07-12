import {
  Activity,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Network,
  Server,
  TerminalSquare,
  type LucideIcon,
} from "lucide-react";
import {
  SiAnsible,
  SiBitbucket,
  SiBuildkite,
  SiConsul,
  SiDatadog,
  SiDocker,
  SiGithubactions,
  SiGitlab,
  SiGo,
  SiGooglecloud,
  SiGrafana,
  SiIstio,
  SiJenkins,
  SiKubernetes,
  SiMongodb,
  SiNginx,
  SiNodedotjs,
  SiOpentelemetry,
  SiPacker,
  SiPagerduty,
  SiPostgresql,
  SiPrometheus,
  SiPuppet,
  SiTerraform,
} from "@icons-pack/react-simple-icons";
import awsIcon from "@/assets/skills/aws.svg";
import azureIcon from "@/assets/skills/azure.svg";
import haproxyIcon from "@/assets/skills/haproxy.svg";
import javaIcon from "@/assets/skills/java.svg";
import mssqlIcon from "@/assets/skills/mssql.svg";
import { skillGroups } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const categoryIcons: Record<string, LucideIcon> = {
  Programming: TerminalSquare,
  "Cloud Platforms": Cloud,
  "Infrastructure & Automation": Server,
  "CI/CD": GitBranch,
  Observability: Activity,
  Databases: Database,
  Networking: Network,
};

const skillIcons = {
  Go: SiGo,
  Node: SiNodedotjs,
  GCP: SiGooglecloud,
  Terraform: SiTerraform,
  Kubernetes: SiKubernetes,
  Docker: SiDocker,
  Puppet: SiPuppet,
  Ansible: SiAnsible,
  Packer: SiPacker,
  "GitHub Actions": SiGithubactions,
  "GitLab CI": SiGitlab,
  BitBucket: SiBitbucket,
  Jenkins: SiJenkins,
  Buildkite: SiBuildkite,
  Datadog: SiDatadog,
  Grafana: SiGrafana,
  Prometheus: SiPrometheus,
  PagerDuty: SiPagerduty,
  OpenTelemetry: SiOpentelemetry,
  PostgreSQL: SiPostgresql,
  Mongo: SiMongodb,
  Consul: SiConsul,
  NGINX: SiNginx,
  Istio: SiIstio,
};

const brandedSvgIcons = {
  Java: javaIcon,
  Azure: azureIcon,
  AWS: awsIcon,
  HAProxy: haproxyIcon,
  MSSQL: mssqlIcon,
} as const;

const iconColors: Record<string, string> = {
  Go: "#00ADD8",
  Node: "#5FA04E",
  GCP: "#4285F4",
  Terraform: "#844FBA",
  Kubernetes: "#326CE5",
  Docker: "#2496ED",
  Puppet: "#FFAE1A",
  Ansible: "#EE0000",
  Packer: "#02A8EF",
  "GitHub Actions": "#3B82F6",
  "GitLab CI": "#FC6D26",
  BitBucket: "#2684FF",
  Jenkins: "#D24939",
  Buildkite: "#14CC80",
  Datadog: "#8B5CF6",
  Grafana: "#F46800",
  Prometheus: "#E6522C",
  PagerDuty: "#06AC38",
  OpenTelemetry: "#F5A800",
  PostgreSQL: "#4169E1",
  Mongo: "#47A248",
  Consul: "#F24C53",
  NGINX: "#009639",
  Istio: "#466BB0",
};

/** Resolves skill marks from locally bundled SVG assets before using the icon component set. */
function SkillIcon({ name }: { name: string }) {
  const brandedSvg = brandedSvgIcons[name as keyof typeof brandedSvgIcons];

  if (brandedSvg) {
    return (
      <img
        src={brandedSvg}
        alt=""
        aria-hidden="true"
        width={28}
        height={28}
        data-skill-icon={name}
        className="size-7 shrink-0 object-contain transition-transform duration-300 group-hover/tile:scale-110"
      />
    );
  }

  const Icon = skillIcons[name as keyof typeof skillIcons];

  if (!Icon) {
    return (
      <Code2
        className="size-7 text-signal"
        aria-hidden="true"
        data-skill-icon={name}
        data-skill-icon-fallback="true"
      />
    );
  }

  return (
    <Icon
      size={28}
      color={iconColors[name]}
      title=""
      aria-hidden="true"
      data-skill-icon={name}
      className="shrink-0 transition-transform duration-300 group-hover/tile:scale-110"
    />
  );
}

const SkillsSection = () => (
  <section id="skills" className="relative">
    <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-[0.15]" />
    <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="// what i work with"
        title="Skills & Technologies"
        description="Cloud platforms, automation, observability, and the tools I use to keep production systems dependable."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
        {skillGroups.map((group, index) => {
          const CategoryIcon = categoryIcons[group.title] ?? Server;
          const span = index < 4 ? "lg:col-span-3" : "lg:col-span-4";

          return (
            <article key={group.title} className={`surface-card skill-card ${span}`}>
              <div className="mb-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-signal/25 bg-signal/10 text-signal">
                  <CategoryIcon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>
              </div>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-3">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="group/tile skill-tile">
                    <SkillIcon name={skill.name} />
                    <span className="text-xs font-medium leading-tight text-muted-foreground transition-colors group-hover/tile:text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillsSection;
