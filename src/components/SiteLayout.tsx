import { NavLink } from "react-router-dom";
import { type ReactNode, useEffect, useState } from "react";

const desktopNavItems = [
  { to: "/", label: "Home", end: true },
  { to: "/fees", label: "Fees" },
  { to: "/coaches", label: "Coaches" },
  { to: "/fields", label: "Fields" },
];

const desktopMoreItems = [
  { to: "/code-of-conduct", label: "Code of Conduct" },
  { to: "/about", label: "About" },
];

const bottomNavItems = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/coaches", label: "Coaches", icon: "groups" },
  { to: "/fees", label: "Fees", icon: "payments" },
];

const moreNavItems = [
  { to: "/code-of-conduct", label: "Code of Conduct", icon: "gavel" },
  { to: "/fields", label: "Fields", icon: "location_on" },
  { to: "/about", label: "About", icon: "info" },
];

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showDesktopMore, setShowDesktopMore] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="fixed top-0 inset-x-0 z-50 bg-surface/78 backdrop-blur-xl border-b border-outline-variant px-6 py-3.5 flex justify-between items-center" role="banner">
        <NavLink to="/" className="font-display font-black italic tracking-[-0.04em] text-primary text-[0.825rem] min-[400px]:text-[0.95rem] sm:text-[1.15rem] md:text-[1.3rem] no-underline flex items-center gap-2 shrink-0">
          <img
            src="/wsfc.webp"
            alt="West Sacramento Futbol Club Logo"
            className="h-8 w-auto block"
          />
          <span className="m-0">WEST SACRAMENTO FUTBOL CLUB</span>
        </NavLink>

        <div className="flex items-center gap-3">
          <nav aria-label="Main navigation" className="hidden md:flex gap-1 items-center">
            {desktopNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => {
                  setShowDesktopMore(false);
                  setShowMoreMenu(false);
                }}
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

            {/* Desktop "More" Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setShowDesktopMore((prev) => !prev)}
                className={`px-3 py-1.5 rounded-lg text-[0.72rem] font-bold tracking-[0.06em] uppercase transition-colors duration-150 flex items-center gap-0.5 cursor-pointer border-0 bg-transparent ${
                  showDesktopMore
                    ? "text-primary bg-primary/10"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-low"
                }`}
              >
                <span>More</span>
                <span className="material-symbols-outlined text-[1.1rem]">keyboard_arrow_down</span>
              </button>

              {showDesktopMore && (
                <div className="absolute top-[2.25rem] right-0 z-50 bg-surface/92 backdrop-blur-xl rounded-xl p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-outline-variant flex flex-col gap-1 w-[180px] animate-fade-in-up">
                  {desktopMoreItems.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setShowDesktopMore(false)}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-lg text-[0.7rem] font-bold tracking-[0.06em] uppercase no-underline transition-all duration-150 ${
                          isActive
                            ? "text-primary bg-primary/10"
                            : "text-on-surface hover:text-on-surface hover:bg-surface-low text-on-surface-variant"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <div className="h-[1px] bg-outline-variant/40 my-1" />
                  <button
                    onClick={() => {
                      toggleTheme();
                      setShowDesktopMore(false);
                    }}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[0.7rem] font-bold tracking-[0.06em] uppercase text-on-surface hover:text-on-surface hover:bg-surface-low text-on-surface-variant cursor-pointer border-0 bg-transparent w-full text-left"
                  >
                    <span className="material-symbols-outlined text-[1rem]">
                      {theme === "dark" ? "light_mode" : "dark_mode"}
                    </span>
                    <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      <main id="main-content" className="pt-[3.75rem] pb-24 md:pb-12 grid gap-6 md:gap-8 min-h-[calc(100vh-3.75rem)]">
        {children}
      </main>

      <footer className="bg-surface-low pt-8 pb-6 px-6 text-center grid gap-1.5 mb-[5.5rem] md:mb-0 border-t border-outline-variant">
        <p className="m-0 text-[0.65rem] font-bold tracking-[0.15em] uppercase text-on-surface-variant">
          &copy; 2026 West Sacramento Futbol Club
        </p>
      </footer>

      {/* Desktop navigation click-catcher backdrop */}
      {showDesktopMore && (
        <div
          className="fixed inset-0 z-40 bg-transparent hidden md:block"
          onClick={() => setShowDesktopMore(false)}
        />
      )}

      {/* Mobile navigation click-catcher backdrop */}
      {showMoreMenu && (
        <div
          className="fixed inset-0 z-40 bg-transparent md:hidden"
          onClick={() => setShowMoreMenu(false)}
        />
      )}

      {/* Mobile navigation "More" drawer overlay */}
      {showMoreMenu && (
        <div className="fixed bottom-[4.75rem] right-4 z-50 bg-surface/92 backdrop-blur-xl rounded-2xl p-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-outline-variant flex flex-col gap-1 w-[210px] animate-fade-in-up md:hidden">
          {moreNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setShowMoreMenu(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl no-underline font-bold text-[0.65rem] tracking-[0.08em] uppercase transition-all duration-150 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-on-surface hover:text-on-surface hover:bg-surface-low text-on-surface-variant"
                }`
              }
            >
              <span className="material-symbols-outlined text-[1.2rem]">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
          <div className="h-[1px] bg-outline-variant/40 my-1" />
          <button
            onClick={() => {
              toggleTheme();
              setShowMoreMenu(false);
            }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl no-underline font-bold text-[0.65rem] tracking-[0.08em] uppercase text-on-surface hover:text-on-surface hover:bg-surface-low text-on-surface-variant cursor-pointer border-0 bg-transparent w-full text-left"
          >
            <span className="material-symbols-outlined text-[1.2rem]">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </span>
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      )}

      <nav aria-label="Mobile navigation" className="fixed bottom-0 inset-x-0 z-50 bg-surface/78 backdrop-blur-xl rounded-t-2xl shadow-[0_-4px_24px_rgba(186,12,0,0.06)] flex justify-around items-center pt-2 px-2 pb-6 md:hidden border-t border-outline-variant">
        {bottomNavItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setShowMoreMenu(false)}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 px-3.5 py-1.5 rounded-xl no-underline transition-all duration-150 cursor-pointer ${
                isActive ? "text-primary bg-primary/10" : "text-on-surface-variant"
              }`
            }
          >
            <span className="material-symbols-outlined text-[1.4rem]">{item.icon}</span>
            <span className="text-[0.52rem] font-bold tracking-[0.1em] uppercase">{item.label}</span>
          </NavLink>
        ))}
        <button
          onClick={() => setShowMoreMenu((prev) => !prev)}
          className={`flex flex-col items-center justify-center gap-1 px-3.5 py-1.5 rounded-xl no-underline transition-all duration-150 cursor-pointer border-0 bg-transparent ${
            showMoreMenu ? "text-primary bg-primary/10" : "text-on-surface-variant"
          }`}
          aria-expanded={showMoreMenu}
          aria-haspopup="true"
        >
          <span className="material-symbols-outlined text-[1.4rem]">more_horiz</span>
          <span className="text-[0.52rem] font-bold tracking-[0.1em] uppercase">More</span>
        </button>
      </nav>
    </>
  );
}
