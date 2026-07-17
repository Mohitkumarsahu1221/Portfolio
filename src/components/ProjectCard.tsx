import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Project } from "~/lib/profile";
import { Chip } from "./Chip";

type ProjectCardProps = {
  project: Project;
  index: number;
  variant: "short" | "full";
};

export function ProjectCard({ project, index, variant }: ProjectCardProps) {
  return (
    <motion.article className="project-card" whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <span className="project-index">0{index + 1}</span>
      <h3>{project.title}</h3>
      <p>{variant === "short" ? project.short : project.full}</p>
      <div className="tag-row">
        {project.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
      <div className="card-links">
        <a href="https://github.com/Mohitkumarsahu1221" target="_blank" rel="noopener noreferrer">
          Code <ArrowUpRight size={14} />
        </a>
        <Link to="/contact">Ask about it →</Link>
      </div>
    </motion.article>
  );
}