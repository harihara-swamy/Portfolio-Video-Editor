import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const articles = [
  {
    title: "Seller Rocket | Video Editor ",
      excerpt1: "Edit and Produce brand videos for digital platforms",
      excerpt2: "Utilized Adobe After Effects, Premiere Pro and Davinci Resolve for advanced video editing",
      excerpt3: "Added motion graphics, transitions, and visual effects to enhance video quality and engagement",
      excerpt4: "Ensured high quality output aligned with brand identity and marketing goals",
      date: "Jan 2026 - Apr 2026",
    // readTime: "8 min",
  },
  {
    title: "Digitz India Technologies | Internship",
    excerpt1: "Learned about digital marketing strategies, including SEO, social media marketing, and content creation",
    excerpt2: "Assisted in creating and scheduling social media posts, contributing to increased online engagement",
    excerpt3: "I used the canva tool to create a poster for the company and it was appreciated by the team",
    excerpt4: "Assisted in creating and scheduling social media posts, contributing to increased online engagement",
     date: "Jun 2023 - Jul 2023",
    // readTime: "12 min",
  },
  // {
  //   title: "Designing APIs That Developers Love",
  //   // excerpt: "Principles of great API design: consistency, discoverability, and developer experience.",
  //   // date: "Jan 2026",
  //   // readTime: "6 min",
  // },
];

export default function BlogSection() {
  return (
    <section id= "experience" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-10" />
        </AnimatedSection>

        <div className="grid md:grid-cols-1 gap-6">
          {articles.map((article, i) => (
            <AnimatedSection key={article.title} delay={i * 0.1}>
              <motion.a
                href="#"
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-6 block h-full group hover:glow-border transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span>{article.date}</span>
                  {/* <span className="w-1 h-1 rounded-full bg-muted-foreground" /> */}
                  {/* <span>{article.readTime} read</span> */}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                  
                </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt1} 
                 </p>
                </div>
                 <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt2} 
                 </p>
                </div>
                 <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt3} 
                 </p>
                </div>
                 <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt4} 
                 </p>
                </div>
                <span className="inline-block mt-4 text-xs text-primary font-medium group-hover:underline">
                  {/* Read more → */}
                </span>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
