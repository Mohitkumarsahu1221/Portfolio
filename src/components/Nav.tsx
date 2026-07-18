import { useState } from "react";
import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <div className="nav-inner">
        <Link to="/" className="monogram" aria-label="Home">
          <img src={`${import.meta.env.BASE_URL}m.svg`} alt="" aria-hidden="true" />
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "active" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="hamburger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((current) => !current)}>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-sheet ${open ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link key={item.to} to={item.to} activeOptions={{ exact: true }} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}