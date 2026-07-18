import { createRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SkillGroup } from "~/components/SkillGroup";
import { TimelineItem } from "~/components/TimelineItem";
import { education, skillGroups } from "~/lib/profile";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  head: () => ({
    title: "About — Mohit Kumar Sahu",
    meta: [
      {
        name: "description",
        content: "Bio, portrait, skill groups, and education timeline for Mohit Kumar Sahu.",
      },
      { property: "og:title", content: "About — Mohit Kumar Sahu" },
      { property: "og:description", content: "Bio, portrait, skill groups, and education timeline for Mohit Kumar Sahu." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <section>
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
            <p className="eyebrow">About</p>
            <h2>Hi, I&apos;m Mohit.</h2>
          </motion.div>
          <div className="about-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
              <div className="portrait">
                <img src={`${import.meta.env.BASE_URL}mohit.png`} alt="Mohit Kumar Sahu" />
              </div>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.label} group={group} />
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
              <div className="bio">
                <p>
                I am an <strong>AI Engineer</strong> passionate about building intelligent applications using <strong>Machine Learning, Generative AI, Agentic AI, and Retrieval-Augmented Generation (RAG)</strong>. I enjoy designing end-to-end AI systems that combine LLMs, modern AI frameworks, and scalable software engineering to solve real-world problems.
                </p>

                <p>
                My experience includes developing <strong>recommendation systems, predictive machine learning models, autonomous AI agents, and full-stack AI applications</strong>. I have hands-on experience with <strong>Python, Django, SQL, and modern AI development</strong>, and I'm currently building a <strong>RAG-powered personal AI assistant</strong> capable of answering questions about my background, projects, skills, and professional journey using my own knowledge base.
                </p>

                <p>
                I'm passionate about exploring the latest advancements in AI and continuously expanding my expertise in <strong>LLMs, AI Agents, RAG pipelines, and intelligent automation</strong>. My goal is to build scalable, production-ready AI solutions that create meaningful real-world impact.
                </p>
              </div>

              <div style={{ marginTop: 48 }}>
                <p className="eyebrow" style={{ marginBottom: 0 }}>
                  Education
                </p>
                <div className="timeline">
                  {education.map((entry) => (
                    <TimelineItem key={`${entry.date}-${entry.title}`} entry={entry} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}