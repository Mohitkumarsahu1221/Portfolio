import { createRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SkillGroup } from "~/components/SkillGroup";
import { TimelineItem } from "~/components/TimelineItem";
import { education, experience, skillGroups } from "~/lib/profile";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/resume",
  head: () => ({
    title: "Resume — Mohit Kumar Sahu",
    meta: [
      {
        name: "description",
        content: "Resume, experience, education, and skills for Mohit Kumar Sahu.",
      },
      { property: "og:title", content: "Resume — Mohit Kumar Sahu" },
      { property: "og:description", content: "Resume, experience, education, and skills for Mohit Kumar Sahu." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main>
      <section>
        <div className="wrap">
          <motion.div className="resume-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">Resume</p>
              <h2>Experience & background.</h2>
            </div>
            <a href="/MohitKumarSahuDS.pdf" className="btn-primary" download>
              Download CV ↓
            </a>
          </motion.div>

          <div className="resume-cols">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
              <h3 style={{ fontSize: 17, marginBottom: 24 }}>Experience</h3>
              <div className="timeline">
                {experience.map((entry) => (
                  <TimelineItem key={`${entry.date}-${entry.title}`} entry={entry} />
                ))}
              </div>

              <h3 style={{ fontSize: 17, margin: "48px 0 24px" }}>Education</h3>
              <div className="timeline">
                {education.map((entry) => (
                  <TimelineItem key={`${entry.date}-${entry.title}`} entry={entry} />
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
              <h3 style={{ fontSize: 17, marginBottom: 24 }}>Skills</h3>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <SkillGroup key={group.label} group={group} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}