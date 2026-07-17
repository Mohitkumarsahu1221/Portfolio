import { Link, createRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { NetworkBackground } from "~/components/NetworkBackground";
import { ProjectCard } from "~/components/ProjectCard";
import { PROFILE, projects } from "~/lib/profile";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  head: () => ({
    title: "Home — Mohit Kumar Sahu",
    meta: [
      {
        name: "description",
        content:
          "Portfolio home for Mohit Kumar Sahu with featured projects, background, and contact CTA.",
      },
      { property: "og:title", content: "Home — Mohit Kumar Sahu" },
      {
        property: "og:description",
        content:
          "Portfolio home for Mohit Kumar Sahu with featured projects, background, and contact CTA.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <section className="hero-shell">
        <div className="hero-bg">
          <div className="glow-blob a" />
          <div className="glow-blob b" />
          <NetworkBackground />
        </div>

        <div className="wrap">
          <div className="hero-layout">
            <motion.div
              className="hero-content"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="eyebrow">
                AI/ML engineer
              </motion.p>
              <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-title">
                Aspiring <span className="accent">AI/ML engineer</span> building intelligent, data-driven systems.
              </motion.h1>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-sub">
                Final-year CSE (AI/ML) student building role-based platforms and data science projects — from customer segmentation to recommendation systems — with Python, Django, and scikit-learn.
              </motion.p>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="hero-ctas">
                <Link to="/projects" className="btn-primary">
                  View work →
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Get in touch
                </Link>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="chips">
                <span className="chip">
                  <span className="dot" />LLMs
                </span>
                <span className="chip">
                  <span className="dot" />Machine Learning
                </span>
                <span className="chip">
                  <span className="dot" />Data Analysis
                </span>
                <span className="chip">
                  <span className="dot" />Recommendation Systems
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              <div className="hero-portrait">
                <img src="/mohit1.png" alt="Mohit Kumar Sahu" />
              </div>
              <div className="hero-name">Mohit Kumar Sahu</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
            <p className="eyebrow">Selected work</p>
            <h2>Projects that turn data into decisions.</h2>
            <p>Three projects spanning unsupervised learning, recommendation engines, and production-style role-based systems.</p>
          </motion.div>
          <motion.div className="project-grid" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ staggerChildren: 0.08 }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} variant="short" />
            ))}
          </motion.div>
        </div>
      </section>

      <section>
        <div className="wrap about-teaser">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
            <p className="eyebrow">About</p>
            <h2 style={{ marginTop: 16, fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>From Bhopal, building toward data engineering.</h2>
            <p style={{ color: "var(--muted-foreground)", marginTop: 16, maxWidth: 520 }}>
              I am an AI Engineer passionate about building intelligent systems powered by Machine Learning, Generative AI, Retrieval-Augmented Generation (RAG), and Agentic AI. I enjoy developing AI applications that combine LLMs, data pipelines, and modern software engineering to solve real-world problems. My experience spans recommendation systems, predictive machine learning, intelligent automation, and end-to-end AI application development using Python and modern AI frameworks. I continuously explore emerging AI technologies and focus on building scalable, production-ready AI solutions that deliver meaningful impact.

            </p>
            <Link to="/about" className="btn-primary" style={{ marginTop: 26, display: "inline-flex" }}>
              More about me →
            </Link>
          </motion.div>
          <motion.div className="portrait" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
            <img src="/mohit.png" alt="Mohit Kumar Sahu" />
          </motion.div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <motion.div className="contact-band" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
            <h2>Open to junior data engineering & data science roles.</h2>
            <p>Currently based in Bhopal, Madhya Pradesh — happy to work remote or relocate.</p>
            <a href={`mailto:${PROFILE.email}`} className="btn-primary">
              Say hello →
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}