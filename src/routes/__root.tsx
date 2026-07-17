import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Footer } from "~/components/Footer";
import { Nav } from "~/components/Nav";

export const Route = createRootRoute({
  head: () => ({
    title: "Mohit Kumar Sahu — Aspiring AI/ML Engineer",
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mohit Kumar Sahu" },
      {
        name: "description",
        content:
          "Portfolio of Mohit Kumar Sahu, an aspiring AI/ML engineer building intelligent, data-driven systems. Projects in customer segmentation, recommendation systems, and role-based automation.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Nav />
      <div className="grain" aria-hidden="true" />
      <Outlet />
      <Footer />
    </>
  );
}