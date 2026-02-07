import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactForm } from "@/components/ContactForm";
import { useProjects, useSkills } from "@/hooks/use-portfolio";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  Terminal,
  Cpu,
  Code2,
  Database,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Section Container Component
const Section = ({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`py-24 md:py-32 px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-mono font-bold tracking-tight">
          <span className="text-muted-foreground opacity-50 mr-2">#</span>
          {title}
        </h2>
        <div className="h-px bg-border flex-1 max-w-[200px]" />
      </motion.div>
      {children}
    </div>
  </section>
);

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: skills, isLoading: skillsLoading } = useSkills();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white/20">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
              Deepak K
            </h1>

            <div className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground h-[60px] md:h-[40px] mb-8">
              <Typewriter
                options={{
                  strings: [
                    "EEE Student.",
                    "Robotics Enthusiast.",
                    "Embedded Systems.",
                    "ROS 2.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>

            <p className="max-w-xl text-lg text-muted-foreground/80 leading-relaxed mb-10">
              Currently exploring the intersection of control theory and modern
              autonomous systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="h-12 px-8 font-mono rounded-none border border-white/10 hover:bg-white hover:text-black transition-colors"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="h-12 px-8 font-mono rounded-none border-border hover:bg-secondary transition-colors group"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/16i5VRggvOxp-5kzRDmh48EcWKlTWRMtI/view?usp=sharing",
                    "_blank",
                  )
                }
              >
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 animate-bounce text-muted-foreground" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am an Electrical & Electronics Engineering student at{" "}
              <strong className="text-foreground">
                New Horizon College of Engineering
              </strong>
              , maintaining a CGPA of{" "}
              <strong className="text-foreground">9.24</strong>.
            </p>
            <p>
              My journey began with a curiosity about how things move. That
              curiosity evolved into a deep passion for
              <strong className="text-foreground"> Robotics</strong>,{" "}
              <strong className="text-foreground">Control Systems</strong>, and{" "}
              <strong className="text-foreground">Embedded Software</strong>.
            </p>
            <p>
              Whether it's configuring ROS 2 nodes for autonomous navigation or
              writing bare-metal firmware for custom PCBs, I enjoy the challenge
              of bridging the gap between abstract code and physical reality.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-2xl border border-white/5 p-8 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] opacity-20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30"></div>
              {/* Decorative Tech Elements */}
              <div className="grid grid-cols-2 gap-4 z-10">
                <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center gap-2 hover:border-white/20 transition-colors">
                  <Terminal className="w-8 h-8 text-white/80" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Firmware
                  </span>
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center gap-2 hover:border-white/20 transition-colors">
                  <Cpu className="w-8 h-8 text-white/80" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Hardware
                  </span>
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center gap-2 hover:border-white/20 transition-colors">
                  <Database className="w-8 h-8 text-white/80" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Systems
                  </span>
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl flex flex-col items-center gap-2 hover:border-white/20 transition-colors">
                  <Code2 className="w-8 h-8 text-white/80" />
                  <span className="font-mono text-xs text-muted-foreground">
                    Software
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS SECTION */}
      <Section id="skills" title="Technical Arsenal">
        {skillsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-40 bg-secondary/20 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills?.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border/50 rounded-xl p-6 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg font-mono font-bold mb-6 text-foreground/90 border-b border-border/50 pb-2 inline-block">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="font-mono text-xs py-1 px-3 border-white/10 text-muted-foreground hover:text-foreground hover:border-white/30 transition-all"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Section>

      {/* PROJECTS SECTION */}
      <Section id="projects" title="Featured Projects">
        {projectsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-64 bg-secondary/20 rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contact" title="Get In Touch">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-4 font-mono text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <a
                  href="mailto:deeeeps06@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  deeeeps06@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <a
                  href="tel:+919606137475"
                  className="hover:text-white transition-colors"
                >
                  +91 9606137475
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border/40 text-center text-muted-foreground/60 font-mono text-xs">
        <p>
          &copy; {new Date().getFullYear()} Deepak K. Built with React &
          Tailwind.
        </p>
      </footer>
    </div>
  );
}
