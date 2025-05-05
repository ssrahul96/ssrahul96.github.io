
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nginx Kubernetes-Ingress",
    description: "Added Custom TransportServer Template",
    tags: ["Kubernetes", "Go", "Nginx", "Docker"],
    repoUrl: "https://github.com/nginxinc/kubernetes-ingress",
    imageUrl: "https://avatars.githubusercontent.com/u/8629072"
  }, {
    id: 2,
    title: "Helm",
    description: "Added Support for Install Helm through Winget",
    tags: ["HELM", "Kubernetes", "Windows"],
    repoUrl: "https://github.com/microsoft/winget-pkgs",
    imageUrl: "https://helm.sh/img/helm.svg"
  }, {
    id: 3,
    title: "NginxProxyManager",
    description: "Added provision to download generated SSL certificates.",
    tags: ["Nginx", "Docker"],
    repoUrl: "https://github.com/NginxProxyManager/nginx-proxy-manager",
    imageUrl: "https://nginxproxymanager.com/logo.svg"
  }, {
    id: 4,
    title: "AdGuardHome",
    description: "Introduced support for custom TLS algorithms and resolved HTTP/3 headerissues.",
    tags: ["DNS", "AD Blocker"],
    repoUrl: "https://github.com/AdguardTeam/AdGuardHome",
    imageUrl: "https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/doc/adguard_home_darkmode.svg"
  }, {
    id: 5,
    title: "winutil",
    description: "Optimised UI loading from xaml",
    tags: ["Windows", "util"],
    repoUrl: "https://github.com/ChrisTitusTech/winutil",
    imageUrl: "https://media3.locals.com/images/groups/originals/2023-11-18/114788/114788_d52nt4eywp5wkji.png"
  }, {
    id: 5,
    title: "Kubelogin",
    description: "Added Support for Windows ARM64",
    tags: ["Kubernetes", "OIDC"],
    repoUrl: "https://github.com/int128/kubelogin",
    imageUrl: "https://avatars.githubusercontent.com/u/71971?s=200&v=4"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source Contribution</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Lend a Hand, Take a Hand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg project-card">
              <div className="h-52 bg-muted flex items-center justify-center">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-scale-down" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-xl font-semibold text-primary/40">{project.title}</span>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between p-6 pt-0">

                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <SiGithub className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
