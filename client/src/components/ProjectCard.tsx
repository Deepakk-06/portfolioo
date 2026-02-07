import { motion } from "framer-motion";
import { ExternalLink, Video } from "lucide-react";
import { type Project } from "@shared/schema";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full bg-card border border-border/50 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-white/5"
    >
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-mono text-muted-foreground mb-1 block uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl font-bold font-mono tracking-tight text-foreground group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex space-x-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-white text-muted-foreground hover:text-black transition-all"
                title="View Project Demo"
              >
                {project.link.includes('youtube.com') || project.link.includes('youtu.be') ? (
                  <Video className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
              </a>
            )}
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="text-xs font-mono bg-secondary/40 hover:bg-secondary/60 text-secondary-foreground/80"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
