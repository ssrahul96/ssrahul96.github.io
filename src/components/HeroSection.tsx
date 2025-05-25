
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, Linkedin, View } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background"
        aria-hidden="true"
      />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              <span className="text-muted-foreground">Hi, I'm</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                Rahul Somasundaram
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground animate-fade-in" style={{ animationDelay: "200ms" }}>
              DevOps Engineer & Cloud Architect
            </h2>

            {/* <p className="text-base md:text-lg text-muted-foreground/90 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Driven by a DevOps mindset, I partner with cross-functional teams to design resilient architectures, automate end-to-end workflows, and deliver consistently high-performing applications at scale.
            </p> */}

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <a href="/#/resume" target="_blank">
                <Button size="lg" className="rounded-full gap-2">
                  <View size={18} />
                  View Resume
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/ssrahul96/" target="_blank">
                <Button size="lg" variant="outline" className="rounded-full gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  LinkedIn Profile
                </Button>
              </a>
              <a href="https://github.com/ssrahul96/" target="_blank">
                <Button size="lg" variant="outline" className="rounded-full gap-2">
                  <SiGithub size={18} />
                  GitHub Profile
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-fade-in flex flex-col items-center gap-2"
      >
        <span className="text-sm">Scroll Down</span>
        <ArrowDownIcon className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
