import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/tryouts", label: "Tryouts" },
  { to: "/fees", label: "Fees" },
  { to: "/coaches", label: "Coaches" },
  { to: "/code-of-conduct", label: "Code of Conduct" },
  { to: "/fields", label: "Fields" },
];

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header" role="banner">
        <div className="site-header-inner">
          <div>
            <p className="club-kicker">West Sacramento Soccer Club</p>
            <h1 className="club-title">Competitive Program</h1>
          </div>

          <nav aria-label="Main navigation" className="site-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <p>West Sacramento Soccer Club</p>
        <p>Questions: doc@westsaccompsoccer.org</p>
      </footer>
    </div>
  );
}
