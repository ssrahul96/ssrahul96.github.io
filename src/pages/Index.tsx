import { Helmet } from "react-helmet";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import SkillsSection from "@/components/SkillsSection";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";

const IndexContent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Rahul Somasundaram | SRE &amp; Cloud Architect</title>
        <meta
          name="description"
          content="Portfolio of Rahul Somasundaram, an SRE and cloud architect focused on reliable infrastructure, automation, cloud-native platforms, and AI-assisted engineering."
        />
      </Helmet>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={theme === "dark"} />
      <main id="main-content">
        <HeroSection isDarkTheme={theme === "dark"} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
      </main>
      <Footer />
    </div>
  );
};

const Index = () => (
  <ThemeProvider>
    <IndexContent />
  </ThemeProvider>
);

export default Index;
