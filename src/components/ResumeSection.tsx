import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function ResumeSection() {
  return (
    <section id="resume" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-10" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 3 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto text-center"
            style={{ perspective: "1000px" }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Download My Resume</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
              Get a detailed overview of my experience, skills, education, and certifications.
            </p>
            <a
               href="/Syed_Anwar_Resume.pdf"
                download
              className="btn-primary-glow px-8 py-3.5 rounded-xl font-medium text-sm inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download PDF
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
