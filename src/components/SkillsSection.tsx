import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Editing",
    skills: ["Short-Form Video Editing", "Hook-Based Editing", "Attention Retention Editing", "Reels & Shorts Editing", "Caption & Subtitle Design", "Fast Cuts & Seamless Transitions", "Story-Driven Editing"],
  },
  {
    title: "Motion & Visuals",
    skills: ["Motion Graphics", "Text Animations", "Visual Effects (VFX)", "Color Grading & Correction", "Cinematic Effects", "Green Screen Editing"],
  },
  {
    title: "Audio",
    skills: ["Audio Sync & Cleanup", "Sound Design", "Background Music Integration", "Voice Enhancement"],
  },
  {
    title: "Tools",
    skills: ["Adobe After Effects", "Adobe Premiere Pro", "DaVinci Resolve"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px]" />
      <div className="section-container relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Creative <span className="gradient-text">Toolkit</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-10" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <AnimatedSection key={cat.title} delay={ci * 0.1}>
              <div className="glass-card rounded-xl p-6 h-full">
                <h3 className="font-heading font-semibold text-lg mb-4 gradient-text">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 rounded-lg bg-accent text-xs font-medium text-accent-foreground cursor-default transition-colors hover:bg-primary/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
