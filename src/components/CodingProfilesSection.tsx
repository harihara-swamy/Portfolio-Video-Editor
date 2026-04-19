import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const profiles = [
  { name: "GitHub", stat: "1.2K+", label: "Contributions", icon: "GH", href: "#" },
  { name: "LeetCode", stat: "400+", label: "Problems Solved", icon: "LC", href: "#" },
  { name: "GeeksforGeeks", stat: "200+", label: "Articles & Solutions", icon: "GFG", href: "#" },
];

export default function CodingProfilesSection() {
//   return (
//     <section id="coding" className="relative">
//       <div className="section-container">
//         <AnimatedSection>
//           <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
//             Work <span className="gradient-text">Experience</span>
//           </h2>
//           <div className="w-16 h-1 rounded-full bg-primary mb-10" />
//         </AnimatedSection>

//         <div className="grid sm:grid-cols-1 gap-6 max-w-3xl mx-auto">
//           {profiles.map((p, i) => (
//             <AnimatedSection key={p.name} delay={i * 0.1}>
//               <motion.a
//                 href={p.href}
//                 whileHover={{ y: -4, scale: 1.02 }}
//                 className="glass-card rounded-xl p-6 text-center block group hover:glow-border transition-shadow duration-300"
//               >
//                 <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-heading font-bold text-sm">
//                   {p.icon}
//                 </div>
//                 <div className="text-2xl font-bold font-heading gradient-text">{p.stat}</div>
//                 <div className="text-xs text-muted-foreground mt-1">{p.label}</div>
//                 <div className="text-sm font-medium mt-3 group-hover:text-primary transition-colors">{p.name}</div>
//               </motion.a>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
 }


