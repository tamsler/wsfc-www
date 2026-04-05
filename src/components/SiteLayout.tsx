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

      <header className="fixed top-0 inset-x-0 z-50 bg-surface/78 backdrop-blur-xl shadow-[0_1px_0_rgba(186,12,0,0.07)] px-6 py-3.5 flex justify-between items-center" role="banner">
        <NavLink to="/" className="font-display font-black italic tracking-[-0.05em] text-primary text-[1.3rem] no-underline flex items-center gap-2">
          <img
            src="/wsfc.webp"
            alt="West Sacramento FC"
            className="h-8 w-auto block"
          />
          <span className="m-0 text-[1.3rem]">WEST SACRAMENTO FC</span>
        </NavLink>

        <nav aria-label="Main navigation" className="hidden md:flex gap-1 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-[0.72rem] font-bold tracking-[0.06em] uppercase transition-colors duration-150 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-low"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main id="main-content" className="pt-[4.25rem] pb-24 md:pb-12 max-w-[680px] md:max-w-[900px] mx-auto px-5 grid gap-5 md:gap-6">
        {children}
      </main>

      <footer className="bg-surface-low pt-8 pb-6 px-6 text-center grid gap-1.5 mb-[5.5rem] md:mb-0">
        <p className="m-0 text-[0.65rem] font-bold tracking-[0.15em] uppercase text-on-surface-variant">
          &copy; 2026 West Sacramento Futbol Club
        </p>
      </footer>

      <nav aria-label="Mobile navigation" className="fixed bottom-0 inset-x-0 z-50 bg-surface/78 backdrop-blur-xl rounded-t-2xl shadow-[0_-4px_24px_rgba(186,12,0,0.06)] flex justify-around items-center pt-2 px-2 pb-6 md:hidden">
        {bottomNavItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 px-3.5 py-1.5 rounded-xl no-underline transition-all duration-150 cursor-pointer ${
                isActive ? "text-primary bg-primary/10" : "text-[#78716c]"
              }`
            }
          >
            <span className="material-symbols-outlined text-[1.4rem]">{item.icon}</span>
            <span className="text-[0.52rem] font-bold tracking-[0.1em] uppercase">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
