import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary mb-10" />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Hi, I am Syed Anwar, I am graduated with a Bachelor of Engineering in Computer Science, with a strong academic background and 
                hands-on experience in video editing. 
                I am passionate about short-form video editing and creating engaging
                content for digital platforms.
              </p>
              <p>
                 I am a video editing professional skilled in Adobe After Effects, Premiere Pro, and
                DaVinci Resolve, capable of producing visually compelling videos. I can create short-form video edits for social
                media, using advanced techniques such as motion graphics, transitions, B-roll, text overlays, and audio editing.
                With a solid foundation in editing principles and a passion for continuous learning.
              </p>
              <p>
                 I aim to deliver high-quality
                visual content that engages and inspires audiences while maintaining efficiency and effectiveness.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "6+", label: "Months Experience" },
                { num: "10+", label: "Projects Delivered" },
                { num: "30+", label: "Happy Clients" },
                { num: "50+", label: "Hours Edited" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-5 text-center group hover:glow-border transition-all duration-300"
                >
                  <div className="text-3xl font-bold font-heading gradient-text">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
