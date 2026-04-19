import { createFileRoute } from "@tanstack/react-router";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import BlogSection from "@/components/BlogSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Video Editor" },
      { name: "description", content: "High-performance Video Editor portfolio showcasing projects, skills, and Editor expertise." },
      { property: "og:title", content: "Portfolio — Video Editor" },
      { property: "og:description", content: "Crafting high-performance web experiences with clean code and thoughtful design." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  component: Index,
});

function Index() {
  
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <BlogSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
