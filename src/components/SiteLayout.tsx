import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/tryouts", label: "Tryouts" },
  { to: "/fees", label: "Fees" },
  { to: "/coaches", label: "Coaches" },
  { to: "/code-of-conduct", label: "Code of Conduct" },
  { to: "/fields", label: "Fields" },
  { to: "/about", label: "About" },
];

const bottomNavItems = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/tryouts", label: "Tryouts", icon: "campaign" },
  { to: "/coaches", label: "Coaches", icon: "groups" },
  { to: "/fees", label: "Fees", icon: "payments" },
];

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header" role="banner">
        <NavLink to="/" className="club-logo">
          <img
            src="/wsfc.webp"
            alt="West Sacramento FC"
            className="club-logo-img"
          />
          WEST SACRAMENTO FC
        </NavLink>

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
      </header>

      <main id="main-content" className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 West Sacramento Futbol Club</p>
      </footer>

      <nav aria-label="Mobile navigation" className="bottom-nav">
        {bottomNavItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              isActive
                ? "bottom-nav-item bottom-nav-item--active"
                : "bottom-nav-item"
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="bottom-nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
