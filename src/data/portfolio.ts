export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Contribution {
  name: string;
  description: string;
  tags: string[];
  url: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const profile = {
  name: "Rahul Somasundaram",
  firstName: "Rahul",
  role: "SRE & Cloud Architect",
  location: "Bengaluru, India",
  email: "rahulstsgr@gmail.com",
  linkedin: "https://www.linkedin.com/in/ssrahul96/",
  github: "https://github.com/ssrahul96/",
  tagline:
    "Driven by a DevOps mindset, I partner with cross-functional teams to design resilient architectures, automate end-to-end workflows, and deliver consistently high-performing applications at scale.",
} as const;

export const highlights = [
  { value: "9+", label: "Years in DevOps & cloud infrastructure" },
  { value: "99.9%", label: "Uptime maintained across production platforms" },
  { value: "80%", label: "Manual effort removed through IaC automation" },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", level: 80 },
      { name: "Go", level: 75 },
      { name: "Node", level: 60 },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "GCP", level: 90 },
      { name: "Azure", level: 80 },
      { name: "AWS", level: 60 },
    ],
  },
  {
    title: "Infrastructure & Automation",
    skills: [
      { name: "Terraform", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "Docker", level: 80 },
      { name: "Puppet", level: 75 },
      { name: "Ansible", level: 70 },
      { name: "Packer", level: 70 },
    ],
  },
  {
    title: "CI/CD",
    skills: [
      { name: "GitHub Actions", level: 80 },
      { name: "GitLab CI", level: 80 },
      { name: "BitBucket", level: 80 },
      { name: "Jenkins", level: 80 },
      { name: "Buildkite", level: 80 },
    ],
  },
  {
    title: "Observability",
    skills: [
      { name: "Datadog", level: 90 },
      { name: "Grafana", level: 80 },
      { name: "Prometheus", level: 80 },
      { name: "PagerDuty", level: 80 },
      { name: "OpenTelemetry", level: 70 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "Mongo", level: 70 },
      { name: "MSSQL", level: 70 },
    ],
  },
  {
    title: "Networking",
    skills: [
      { name: "Consul", level: 80 },
      { name: "NGINX", level: 75 },
      { name: "HAProxy", level: 75 },
      { name: "Istio", level: 75 },
    ],
  },
];

export const contributions: Contribution[] = [
  {
    name: "Nginx Kubernetes-Ingress",
    description: "Added a custom TransportServer template.",
    tags: ["Kubernetes", "Go", "Nginx", "Docker"],
    url: "https://github.com/nginxinc/kubernetes-ingress",
  },
  {
    name: "Helm",
    description: "Added support for installing Helm through Winget.",
    tags: ["Helm", "Kubernetes", "Windows"],
    url: "https://github.com/microsoft/winget-pkgs",
  },
  {
    name: "Nginx Proxy Manager",
    description: "Added a way to download generated SSL certificates.",
    tags: ["Nginx", "Docker"],
    url: "https://github.com/NginxProxyManager/nginx-proxy-manager",
  },
  {
    name: "AdGuard Home",
    description:
      "Introduced custom TLS algorithm support and resolved HTTP/3 header issues.",
    tags: ["DNS", "Ad Blocker"],
    url: "https://github.com/AdguardTeam/AdGuardHome",
  },
  {
    name: "winutil",
    description: "Optimised UI loading from XAML.",
    tags: ["Windows", "Utility"],
    url: "https://github.com/ChrisTitusTech/winutil",
  },
  {
    name: "Kubelogin",
    description: "Added support for Windows ARM64.",
    tags: ["Kubernetes", "OIDC"],
    url: "https://github.com/int128/kubelogin",
  },
];

export const experience: Experience[] = [
  {
    title: "Software Engineer III",
    company: "Wayfair",
    location: "Bengaluru, India",
    period: "2025 — Present",
    highlights: [
      "Part of the Platform Foundations team, building and maintaining core platform services.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Checkpoint Systems",
    location: "Bengaluru, India",
    period: "2020 — 2025",
    highlights: [
      "Designed and maintained infrastructure with Terraform as IaC, reducing manual effort by 80%.",
      "Architected and administered Azure Kubernetes Service clusters.",
      "Built a Kubernetes Operator and Helm charts to automate SaaS rollout.",
      "Implemented continuous delivery with Argo CD for rolling and blue-green deployments at 99.9% uptime.",
      "Used Azure Front Door and Nginx for global load balancing, disaster recovery, and DDoS protection.",
      "Monitored metrics with Datadog and ran a high-availability Grafana Loki logging stack.",
      "Set up on-premises Talos-based Kubernetes clusters for development and QA.",
    ],
  },
  {
    title: "Member Technical Staff",
    company: "GOFRUGAL Technologies",
    location: "Chennai, India",
    period: "2017 — 2020",
    highlights: [
      "Integrated digital payments across UPI and platforms including Paytm, M-Pesa, and Pine Labs.",
      "Designed a messaging service as a central hub for data exchange.",
      "Built CI/CD pipelines for application builds and deployments using Jenkins and Ansible.",
      "Contributed to a master import tool for seamless customer data imports into the POS system.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Information Technology",
  period: "2013 — 2017",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Open Source", href: "#open-source" },
  { label: "Resume", href: "#resume" },
] as const;
