import { BriefcaseIcon, UniversityIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const ResumeSection = () => {

  type Experience = {
    title: string;
    company: string;
    location: string;
    duration: string;
    descriptions: string[];
  };

  const experiences: Experience[] = [
    {
      title: "Software Engineer III",
      company: "Wayfair",
      location: "Bengaluru, India",
      duration: "2025 - Present",
      descriptions: []
    },
    {
      title: "Senior Software Engineer",
      company: "Checkpoint Systems",
      location: "Bengaluru, India",
      duration: "2020 – 2025",
      descriptions: [
        "Designed, built, and maintained infrastructure using Terraform as IaaC, reducing manual effort by 80%.",
        "Architected and administered Azure Kubernetes Service clusters.",
        "Developed Kubernetes Operator and Helm charts for SaaS deployment, simplifying and automating rollout.",
        "Implemented CD with Argo CD for rolling upgrades and blue-green deployments, maintaining 99.9% uptime.",
        "Used Azure Front Door and Nginx for global load balancing, disaster recovery, and DDoS protection.",
        "Monitored metrics using Datadog for proactive performance and SLA management.",
        "Set up high-availability Grafana Loki stack for centralized logging.",
        "Managed mobile app distribution via Google Play Store and Apple App Store.",
        "Set up on-prem Talos-based Kubernetes clusters for Dev and QA environments.",
        "Automated app deployments from source control using Ansible.",
        "Built a sync utility between SCM and Zookeeper for live config updates.",
        "Containerized an internal app with Docker and automated CI/CD via GitLab CI and Ansible.",
      ],
    },
    {
      title: "Member Technical Staff",
      company: "GOFRUGAL Technologies",
      location: "Chennai, India",
      duration: "2017-2020",
      descriptions: [
        "An early adopter of digital transactions, integrating seamlessly with UPI and third-party platforms such as Paytm, M-Pesa, Innoviti, ONGO, UrbanPiper, Pine Labs, and Benow to streamline payment processing and enhance customer convenience.",
        "Designed and implemented a Messaging Service as a central hub for data exchange.",
        "Developed a framework to synchronize customer business data to the cloud.",
        "Engineered and implemented a CI/CD pipeline for streamlined application builds and deployments using Jenkins and Ansible.",
        "Contributed to development of a Master Import tool, enabling seamless customer data imports (such as inventory) into the POS system.",
        "Optimized weekly product updates through module patches.",
      ],
    },
  ];

  return (
    <section id="resume" className="section py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A seasoned Senior Software Engineer with around 8 years of experience in IT.
            <br />
            Extensive experience in utilizing Azure for comprehensive end-to-end deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left side: Professional Experience */}
          <div className="grid grid-cols-1 gap-4 pt-6">
            <Card className="shadow-md bg-background/50 backdrop-blur border-l-2">
              <CardTitle className="p-6 flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <BriefcaseIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Professional Experience</h4>
                </div>
              </CardTitle>
            </Card>

            {experiences.map((exp, index) => (
              <Card key={index} className="mb-6 shadow-md bg-background/50 backdrop-blur border-l-2 p-4">
                {/* Aligning CardHeader properly */}
                <CardTitle className="pb-2 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h5 className="font-semibold text-base">{exp.title}</h5>
                    <p className="text-xs text-gray-500">{exp.duration}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.company} – {exp.location}</p>
                </CardTitle>
                <div className="pl-1">
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {exp.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Right side: Education */}
          <div className="grid grid-flow-row auto-rows-max pt-6">
            <Card className="shadow-md bg-background/50 backdrop-blur border-l-2">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-full p-3 bg-primary/10">
                  <UniversityIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Education</h3>
                  <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                    B.Tech Information Technology
                    <br />
                    2013 - 2017
                    <br />
                    <em>Anna University, Chennai, India</em>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
