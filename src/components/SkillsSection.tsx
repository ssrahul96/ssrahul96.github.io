
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  category: "pl" | "infrastructure" | "ci_cd" | "cloud" | "monitoring" | "database";
}

const skills: Skill[] = [
  { name: "Java", level: 80, category: "pl" },
  { name: "Go", level: 60, category: "pl" },
  { name: "Node", level: 60, category: "pl" },
  { name: "Kubernetes", level: 80, category: "infrastructure" },
  { name: "Docker", level: 80, category: "infrastructure" },
  { name: "Terraform", level: 80, category: "infrastructure" },
  { name: "Ansible", level: 70, category: "infrastructure" },
  { name: "Azure", level: 80, category: "cloud" },
  { name: "AWS", level: 60, category: "cloud" },
  { name: "GitHub Actions", level: 80, category: "ci_cd" },
  { name: "GitLab CI", level: 80, category: "ci_cd" },
  { name: "BitBucket", level: 80, category: "ci_cd" },
  { name: "Jenkins", level: 70, category: "ci_cd" },
  { name: "Datadog", level: 90, category: "monitoring" },
  { name: "Grafana", level: 80, category: "monitoring" },
  { name: "Prometheus", level: 80, category: "monitoring" },
  { name: "OpenTelemetry", level: 70, category: "monitoring" },
  { name: "Mongo", level: 70, category: "database" },
  { name: "SQL", level: 70, category: "database" },
];

// const skillTags: any[] = [
//   "Docker",
//   "Kubernetes",
//   "Terraform",
//   "AWS",
//   "Azure",
//   "GCP",
//   "Jenkins",
//   "GitHub Actions",
//   "Ansible",
//   "Prometheus",
//   "Grafana",
//   "ELK Stack",
//   "Python",
//   "Bash",
//   "Go",
//   "Nginx",
//   "HAProxy",
//   "Redis",
//   "PostgreSQL",
//   "MongoDB"
// ]

// Group skills by category
const skillsByCategory = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);

// Helper function to get human-readable category name
const getCategoryName = (category: string) => {
  switch (category) {
    case "pl":
      return "Programming Languages";
    case "infrastructure":
      return "Infrastructure & Automation";
    case "ci_cd":
      return "CI/CD";
    case "cloud":
      return "Cloud Platforms";
    case "monitoring":
      return "Monitoring & Logging";
    case "database":
      return "Database";
    default:
      return category;
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A collaborative developer and engineer well-versed in Cloud technologies.
            <br />
            Proficient in developing and deploying applications using Kubernetes and CI/CD.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <Card key={category} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{getCategoryName(category)}</h3>
                <div className="space-y-6">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline" className="bg-background">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="mt-12">
          <Card className="border-none shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-center">DevOps Tools & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillTags.map((tool) => (
                  <Badge key={tool} variant="secondary" className="px-4 py-2 text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
