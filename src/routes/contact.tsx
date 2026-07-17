import { createRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PROFILE } from "~/lib/profile";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  head: () => ({
    title: "Contact — Mohit Kumar Sahu",
    meta: [
      {
        name: "description",
        content: "Contact Mohit Kumar Sahu via email, LinkedIn, or GitHub.",
      },
      { property: "og:title", content: "Contact — Mohit Kumar Sahu" },
      { property: "og:description", content: "Contact Mohit Kumar Sahu via email, LinkedIn, or GitHub." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <section>
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s talk.</h2>
          </motion.div>
          <motion.div className="contact-hero" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>
            <a href={`mailto:${PROFILE.email}`} className="big-email">
              {PROFILE.email} ↗
            </a>
            <div className="contact-buttons">
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.25h4V23h-4V8.25zM8.5 8.25h3.83v2.02h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.75c0-1.61-.03-3.68-2.25-3.68-2.25 0-2.6 1.76-2.6 3.57V23h-4V8.25z" />
                </svg>
                LinkedIn
              </a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="icon-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55v-2.14c-3.2.7-3.88-1.35-3.88-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.68.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                </svg>
                GitHub
              </a>
            </div>
            <div className="meta-row">
              <span>📍 {PROFILE.location}</span>
            </div>
            <span className="avail-chip">
              <span className="avail-dot" />Open to opportunities
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}