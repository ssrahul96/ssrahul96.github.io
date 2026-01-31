
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, CodeIcon, UserIcon, GlobeIcon, MailIcon } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          {/* <Badge variant="outline" className="mb-2">About Me</Badge> */}
          <h2 className="text-3xl md:text-4xl font-bold">About</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-6 shadow-md bg-background/50 backdrop-blur">
              <img
                src="/assets/img/profile.webp"
                srcSet={[
                  "/assets/img/profile-128.webp 128w",
                  "/assets/img/profile-256.webp 256w",
                  "/assets/img/profile-384.webp 384w",
                  "/assets/img/profile-512.webp 512w",
                  "/assets/img/profile.webp 800w",
                ].join(", ")}
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 40vw, 80vw"
                alt="Rahul Somasundaram"
                width={800}
                height={800}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 bg-card p-6 rounded-xl shadow-lg bg-background/50 backdrop-blur">
              <div className="flex items-center gap-3">
                <UserIcon className="h-5 w-5 text-primary" />
                <span className="font-medium">Rahul Somasundaram</span>
              </div>
              <div className="flex items-center gap-3">
                <GlobeIcon className="h-5 w-5 text-primary" />
                <span>Bengaluru, India</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <AwardIcon className="h-5 w-5 text-primary" />
                <span>AWS Certified DevOps Engineer</span>
              </div> */}
              <div className="flex items-center gap-3">
                <a href="mailto:rahulstsgr@gmail.com" className="text-primary hover:underline flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-primary" />
                  <span>rahulstsgr@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Driven by a DevOps mindset, I partner with cross-functional teams to design resilient architectures, automate end-to-end workflows, and deliver consistently high-performing applications at scale.
            </p>
            {/* <p className="text-muted-foreground leading-relaxed">
              My approach combines infrastructure-as-code principles with security best practices and monitoring solutions
              to deliver robust, maintainable systems. I enjoy solving complex problems and continuously optimizing
              deployment processes to improve efficiency and reduce time-to-market.
            </p> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <Card className="shadow-md bg-background/50 backdrop-blur">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10">
                    <BriefcaseIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Professional Experience</h4>
                    <p className="text-muted-foreground text-sm">8+ years experience in DevOps practices and cloud infrastructure</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md bg-background/50 backdrop-blur">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="rounded-full p-3 bg-primary/10">
                    <CodeIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Tech Enthusiast</h4>
                    <p className="text-muted-foreground text-sm">Passionate about implementing infrastructure as code and cloud-native technologies</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
