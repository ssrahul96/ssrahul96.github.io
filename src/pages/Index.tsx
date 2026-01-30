import { useState, useEffect, Suspense, lazy } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import Navbar from "@/components/Navbar";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { Helmet } from "react-helmet";

// Lazy-loaded components
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const ResumeSection = lazy(() => import("@/components/ResumeSection"));
const Footer = lazy(() => import("@/components/Footer"));
// const ContactSection = lazy(() => import("@/components/ContactSection"));

const IndexContent = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Rahul Somasundaram | DevOps Engineer &amp; Cloud Architect</title>
        <link rel="canonical" href="https://ssrahul96.me/" />
        <meta
          name="description"
          content="Rahul Somasundaram is a collaborative developer and cloud engineer focused on scalable, cloud-native solutions and modern tech innovation."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rahul Somasundaram" />
        <meta property="og:title" content="Rahul Somasundaram" />
        <meta
          property="og:description"
          content="Rahul Somasundaram is a collaborative developer and cloud engineer focused on scalable, cloud-native solutions and modern tech innovation."
        />
        <meta property="og:url" content="https://ssrahul96.me/" />
        <meta property="og:image" content="https://ssrahul96.me/og.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ssrahul96.me" />
        <meta name="twitter:title" content="Rahul Somasundaram" />
        <meta
          name="twitter:description"
          content="Rahul Somasundaram is a collaborative developer and cloud engineer focused on scalable, cloud-native solutions and modern tech innovation."
        />
        <meta property="twitter:url" content="https://ssrahul96.me/" />
        <meta name="twitter:image" content="https://ssrahul96.me/og.png" />
      </Helmet>

      <Navbar toggleTheme={toggleTheme} isDarkTheme={theme === "dark"} />

      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Suspense fallback={<div className="text-center py-10">Loading projects...</div>}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<div className="text-center py-10">Loading resume...</div>}>
          <ResumeSection />
        </Suspense>
        {/* <Suspense fallback={<div>Loading contact...</div>}>
          <ContactSection />
        </Suspense> */}
      </main>

      <Suspense fallback={<div className="text-center py-4">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <IndexContent />
    </ThemeProvider>
  );
};

export default Index;
