import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Alfis Beauty",
    desc: "Alfis Beauty is an online skincare brand that offers products like face washes, serums, and creams focused on improving skin glow, reducing acne, and enhancing overall skin health.",
    tags: ["Adobe After Effects", "AI-assisted motion animation", "Keyframe animation & motion design", "Visual compositing"],
    impact: "Boosted visual engagement by 30% (estimated)",
    demo1: "https://drive.google.com/file/d/1GAMQodl94mM5ckzpbzAqK75chJMVIfX1/view?usp=sharing",
    github: "#",
  },
  {
    title: "Tamil Paal",
    desc: "Tamil Paal is a dairy brand that delivers fresh, natural cow milk and dairy products like curd, paneer, and ghee, focusing on purity, farm-fresh quality, and daily doorstep delivery.",
    tags: ["Adobe After Effects", "Motion graphics & keyframe animation", "Visual effects (VFX)", "Compositing & animation design"],
    impact: "More engaging product presentation",
    demo2: "https://drive.google.com/file/d/1mh2hhDITpPm432CquTNQjNtLUwO3LA30/view?usp=sharing",
    github: "#",
  },
  {
    title: "Azhagan Shirts",
    desc: "Azhagan Shirts is a menswear brand that offers traditional and modern cotton shirts and dhoti sets, focusing on comfort, natural fabrics, and classic ethnic style for occasions like weddings and festivals.",
    tags: ["Google Gemini (image + video generation)", "Adobe After Effects", "AI-generated visuals & video creation", "Motion enhancement & visual refinement"],
    impact: "Strong visual hook with character motion",
    demo3: "https://drive.google.com/file/d/1RVQ8s4XWmG-WUT2tXOxG2ygDPmM2hNrh/view?usp=sharing",
    github: "#",
  },
  {
    title: "VerPackArt",
    desc: "Verpackart is a packaging brand that provides eco-friendly and sustainable paper bags and packaging solutions, focusing on recyclable materials and custom packaging for businesses and e-commerce use.",
    tags: ["Google Gemini (image + video generation)", "Adobe After Effects", "AI-generated visuals & scene creation", "Motion enhancement & visual refinement"],
    impact: "Clear lifestyle-based storytelling",
    demo4: "https://drive.google.com/file/d/1AKAvDbf8n5Xx4efQBdM_OciT1RWp0ees/view?usp=sharing",
    github: "#",
  },
  {
    title: "The Stripp & Co",
    desc: "The Stripp & Co is a clothing brand that sells graphic and trendy t-shirts, focusing on bold designs and casual streetwear style for everyday wear.",
    tags: ["Google Gemini (image + video generation)", "Adobe After Effects", "AI-generated visuals", "Motion editing & sequencing"],
    impact: "More appealing product showcase",
    demo5: "https://drive.google.com/file/d/1GXoSBwKnIQCw6UI1fjmelko3a9XTspEn/view?usp=sharing",
    github: "#",
  },
  {
    title: "Infographic Edit",
    desc: "This infographic video clearly presents information in an easy-to-understand and visually engaging way. It helps keep the audience’s attention while delivering information quickly and effectively. The overall design and motion graphics give the video a clean, professional look and feel.",
    tags: ["Adobe After Effects", "Motion graphics & keyframe animation", "Infographic design & visual storytelling", "Audio sync & timing"],
    impact: "Strong visual retention through motion graphics",
    demo6: "https://drive.google.com/file/d/1YINBbsIe25bAlbT4w4EdCceq3qDvktp8/view?usp=sharing",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-chart-3/5 blur-[120px]" />
      <div className="section-container relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-10" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 h-full flex flex-col group hover:glow-border transition-shadow duration-300"
              >
                <h3 className="font-heading text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{project.desc}</p>
                <p className="text-xs text-primary mb-4 font-medium">⚡ {project.impact}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-accent text-[11px] font-medium text-accent-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <a className="btn-primary-glow px-4 py-2 rounded-lg text-xs font-medium">
                       <a href={project.demo1 || project.demo2 || project.demo3 || project.demo4 || project.demo5 || project.demo6 }
                       target="_blank" 
                       rel="noopener noreferrer"
                        className="btn-primary-glow px-4 py-2 rounded-lg text-xs font-medium"
                      >
                        Live
                      </a>
                  </a>
                  {/* <a href={project.github} className="btn-glass px-4 py-2 rounded-lg text-xs font-medium">
                    GitHub
                  </a> */}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
