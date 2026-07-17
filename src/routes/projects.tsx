import { createRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ProjectCard } from "~/components/ProjectCard";
import { projects } from "~/lib/profile";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  head: () => ({
    title: "Projects — Mohit Kumar Sahu",
    meta: [
      {
        name: "description",
        content: "All projects by Mohit Kumar Sahu, including segmentation, recommendation, and Django systems.",
      },
      { property: "og:title", content: "Projects — Mohit Kumar Sahu" },
      {
        property: "og:description",
        content: "All projects by Mohit Kumar Sahu, including segmentation, recommendation, and Django systems.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main>
      <section>
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
            <p className="eyebrow">Work</p>
            <h2>All projects.</h2>
            <p>A closer look at the systems I&apos;ve built — the problem, the approach, and the tools behind each one.</p>
          </motion.div>
          <motion.div className="project-grid" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} variant="full" />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}