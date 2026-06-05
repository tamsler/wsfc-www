import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

// Keep this content in code for next year, but toggle showDetails to false to hide it
const showDetails = false;

const sessions = [
  {
    label: "Session One",
    title: "U09 – U14",
    chip: "YOUTH",
    chipClass: "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-container",
    dates: "MAY 12 – 14, 2026",
    time: "5:30 PM – 8:00 PM",
  },
  {
    label: "Session Two",
    title: "U15 – U19",
    chip: "SENIOR",
    chipClass: "bg-primary-fixed text-on-primary-fixed-variant dark:bg-primary/20 dark:text-primary",
    dates: "MAY 19 – 21, 2026",
    time: "5:30 PM – 8:00 PM",
  },
];

const prepItems = [
  {
    icon: "shield",
    title: "Mandatory Gear",
    body: "Shin guards and appropriate soccer cleats are required for all participants.",
  },
  {
    icon: "water_full",
    title: "Hydration",
    body: "Bring a labeled water bottle. Arrive at least 20 minutes early for check-in and warm-ups.",
  },
  {
    icon: "description",
    title: "Registration",
    body: "Ensure your registration is completed online prior to arrival.",
  },
  {
    icon: "checkroom",
    title: "What to Wear",
    body: "Wear a light-colored training shirt. Label all personal gear.",
  },
];

export default function TryoutsPage() {
  return (
    <>
      <PageMeta
        title="Tryouts"
        description="2026 West Sacramento FC tryout dates, session details, and preparation guide for boys and girls U09–U19."
      />

      {/* Hero */}
      <section className="hero animate-fade-in-up" aria-labelledby="tryouts-title">
        <div className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full">
          <p className="hero-eyebrow text-white/85 tracking-[0.15em] font-extrabold">West Sacramento Futbol Club</p>
          <h1 id="tryouts-title">
            Join
            <br />
            Our Club.
          </h1>
          <p>
            {showDetails 
              ? "Girls and boys from U09 through U19. Two tryout windows — register early and come prepared to compete."
              : "Competitive soccer program for boys and girls U09 through U19. Follow our coaching roster and team details for the active season."
            }
          </p>
          <div className="hero-actions">
            {showDetails ? (
              <>
                <a
                  className="btn-hero-primary"
                  href="https://westsaccompsoccer.byga.net/tryouts/460xkgbu42/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2026 Tryouts Registration
                </a>
                <a className="btn-hero-ghost" href="mailto:doc@westsacramentofc.org">
                  Questions? Email Us
                </a>
              </>
            ) : (
              <a className="btn-hero-primary" href="mailto:doc@westsacramentofc.org">
                Questions? Email Us
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Tryouts status section */}
      {!showDetails && (
        <section aria-label="Tryouts status" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up animation-delay-100">
          <div className="bg-surface-lowest rounded-2xl p-6 border border-outline-variant/60 text-center grid gap-4 max-w-xl mx-auto shadow-sm card-interactive">
            <div className="w-12 h-12 bg-primary/8 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary text-[1.5rem]">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <div>
              <h3 className="m-0 font-display font-bold text-xl uppercase tracking-tight text-on-surface">Tryouts Concluded</h3>
              <p className="m-0 mt-2 text-[0.875rem] text-on-surface-variant leading-relaxed">
                Tryouts for the 2026/2027 competitive season have concluded. Thank you to all the players and families who participated!
              </p>
              <p className="m-0 mt-2 text-[0.825rem] text-on-surface-variant/80 italic leading-relaxed">
                If you have questions about coach contacts, late placements, or team availability, please reach out to our Director of Coaching.
              </p>
            </div>
            <div className="mt-1">
              <a className="btn-solid inline-flex" href="mailto:doc@westsacramentofc.org">
                Email Director of Coaching
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Conditional Tryouts Content (Hidden when tryouts are done, kept in code for next year) */}
      {showDetails && (
        <>
          {/* Session cards */}
          <section aria-label="Tryout sessions" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up animation-delay-100">
            <h3 className="section-heading">Tryout Windows</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {sessions.map((s) => (
                <div key={s.label} className="bg-surface-lowest rounded-2xl p-5 grid gap-4 card-interactive">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-secondary m-0 mb-1">{s.label}</p>
                      <h3 className="m-0 font-display font-bold text-2xl tracking-[-0.02em]">{s.title}</h3>
                    </div>
                    <span className={`text-[0.6rem] font-bold uppercase tracking-[0.08em] px-[0.6rem] py-[0.2rem] rounded-full whitespace-nowrap ${s.chipClass}`}>{s.chip}</span>
                  </div>
                  <div className="grid gap-2.5">
                    <div className="flex items-center gap-3 text-on-surface-variant text-[0.875rem] font-medium">
                      <span className="material-symbols-outlined text-primary text-[1.1rem] shrink-0">calendar_today</span>
                      {s.dates}
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant text-[0.875rem] font-medium">
                      <span className="material-symbols-outlined text-primary text-[1.1rem] shrink-0">schedule</span>
                      {s.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Schedule */}
          <section aria-label="Tryout schedule" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up animation-delay-200">
            <h3 className="section-heading">Schedule</h3>
            {/* Mobile: stacked cards */}
            <div className="grid gap-3 sm:hidden">
              {/* U9–U12 card */}
              <div className="bg-surface-lowest rounded-2xl p-4 card-interactive">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary text-[1.1rem]">sports_soccer</span>
                  <span className="font-display font-bold text-lg">U9 – U12</span>
                  <span className="ml-auto text-[0.65rem] font-bold tracking-[0.08em] uppercase bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-container px-2 py-0.5 rounded-full">Girls &amp; Boys</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-surface-low rounded-xl p-3">
                    <p className="m-0 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-on-surface-variant mb-1">Dates</p>
                    <div className="flex items-center gap-1.5 text-[0.875rem] font-semibold">
                      <span className="material-symbols-outlined text-primary text-[1rem]">calendar_today</span>
                      May 12 – 14
                    </div>
                  </div>
                  <div className="bg-surface-low rounded-xl p-3">
                    <p className="m-0 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-on-surface-variant mb-1">Time</p>
                    <div className="flex items-center gap-1.5 text-[0.875rem] font-semibold">
                      <span className="material-symbols-outlined text-primary text-[1rem]">schedule</span>
                      5:30 – 6:45 PM
                    </div>
                  </div>
                </div>
              </div>
              {/* U13–U14 card */}
              <div className="bg-surface-lowest rounded-2xl p-4 card-interactive">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary text-[1.1rem]">sports_soccer</span>
                  <span className="font-display font-bold text-lg">U13 – U14</span>
                  <span className="ml-auto text-[0.65rem] font-bold tracking-[0.08em] uppercase bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-container px-2 py-0.5 rounded-full">Girls &amp; Boys</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-surface-low rounded-xl p-3">
                    <p className="m-0 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-on-surface-variant mb-1">Dates</p>
                    <div className="flex items-center gap-1.5 text-[0.875rem] font-semibold">
                      <span className="material-symbols-outlined text-primary text-[1rem]">calendar_today</span>
                      May 12 – 14
                    </div>
                  </div>
                  <div className="bg-surface-low rounded-xl p-3">
                    <p className="m-0 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-on-surface-variant mb-1">Time</p>
                    <div className="flex items-center gap-1.5 text-[0.875rem] font-semibold">
                      <span className="material-symbols-outlined text-primary text-[1rem]">schedule</span>
                      6:45 – 8:00 PM
                    </div>
                  </div>
                </div>
              </div>
              {/* U15–U19 Girls card */}
              <div className="bg-surface-lowest rounded-2xl p-4 card-interactive">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary text-[1.1rem]">sports_soccer</span>
                  <span className="font-display font-bold text-lg">U15 – U19</span>
                  <span className="ml-auto text-[0.65rem] font-bold tracking-[0.08em] uppercase bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-container px-2 py-0.5 rounded-full">Girls</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-surface-low rounded-xl p-3">
                    <p className="m-0 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-on-surface-variant mb-1">Dates</p>
                    <div className="flex items-center gap-1.5 text-[0.875rem] font-semibold">
                      <span className="material-symbols-outlined text-primary text-[1rem]">calendar_today</span>
                      May 19 – 21
                    </div>
                  </div>
                  <div className="bg-surface-low rounded-xl p-3">
                    <p className="m-0 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-on-surface-variant mb-1">Time</p>
                    <div className="flex items-center gap-1.5 text-[0.875rem] font-semibold">
                      <span className="material-symbols-outlined text-primary text-[1rem]">schedule</span>
                      5:30 – 7:00 PM
                    </div>
                  </div>
                </div>
              </div>
              {/* U15–U19 Boys card */}
              <div className="bg-surface-lowest rounded-2xl p-4 card-interactive">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary text-[1.1rem]">sports_soccer</span>
                  <span className="font-display font-bold text-lg">U15 – U19</span>
                  <span className="ml-auto text-[0.65rem] font-bold tracking-[0.08em] uppercase bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-container px-2 py-0.5 rounded-full">Boys</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-surface-low rounded-xl p-3">
                    <p className="m-0 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-on-surface-variant mb-1">Dates</p>
                    <div className="flex items-center gap-1.5 text-[0.875rem] font-semibold">
                      <span className="material-symbols-outlined text-primary text-[1rem]">calendar_today</span>
                      May 19 – 21
                    </div>
                  </div>
                  <div className="bg-surface-low rounded-xl p-3">
                    <p className="m-0 text-[0.6rem] font-bold uppercase tracking-[0.08em] text-on-surface-variant mb-1">Time</p>
                    <div className="flex items-center gap-1.5 text-[0.875rem] font-semibold">
                      <span className="material-symbols-outlined text-primary text-[1rem]">schedule</span>
                      6:30 – 8:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Desktop: table layout */}
          <div className="hidden sm:block bg-surface-lowest rounded-2xl overflow-hidden border border-outline-variant shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-4 px-5 py-3.5 bg-primary/8 border-b border-outline-variant">
              <p className="m-0 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-primary">Age Group</p>
              <p className="m-0 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-primary">Gender</p>
              <p className="m-0 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-primary">Dates</p>
              <p className="m-0 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-primary">Time</p>
            </div>
            {/* U9–U12 row */}
            <div className="grid grid-cols-4 items-center px-5 py-4 border-b border-surface-highest/60 hover:bg-surface-low/30 transition-colors">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[1rem] shrink-0">sports_soccer</span>
                <span className="font-display font-bold text-[0.95rem]">U9 – U12</span>
              </div>
              <span className="text-[0.875rem] text-on-surface-variant font-medium">Girls &amp; Boys</span>
              <div className="flex items-center gap-2 text-[0.875rem] font-medium">
                <span className="material-symbols-outlined text-primary text-[1rem] shrink-0">calendar_today</span>
                May 12 – 14
              </div>
              <div className="flex items-center gap-2 text-[0.875rem] font-medium">
                <span className="material-symbols-outlined text-primary text-[1rem] shrink-0">schedule</span>
                5:30 PM – 6:45 PM
              </div>
            </div>
            {/* U13–U14 row */}
            <div className="grid grid-cols-4 items-center px-5 py-4 border-b border-surface-highest/60 hover:bg-surface-low/30 transition-colors">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[1rem] shrink-0">sports_soccer</span>
                <span className="font-display font-bold text-[0.95rem]">U13 – U14</span>
              </div>
              <span className="text-[0.875rem] text-on-surface-variant font-medium">Girls &amp; Boys</span>
              <div className="flex items-center gap-2 text-[0.875rem] font-medium">
                <span className="material-symbols-outlined text-primary text-[1rem] shrink-0">calendar_today</span>
                May 12 – 14
              </div>
              <div className="flex items-center gap-2 text-[0.875rem] font-medium">
                <span className="material-symbols-outlined text-primary text-[1rem] shrink-0">schedule</span>
                6:45 PM – 8:00 PM
              </div>
            </div>
            {/* U15–U19 Girls row */}
            <div className="grid grid-cols-4 items-center px-5 py-4 border-b border-surface-highest/60 hover:bg-surface-low/30 transition-colors">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[1rem] shrink-0">sports_soccer</span>
                <span className="font-display font-bold text-[0.95rem]">U15 – U19</span>
              </div>
              <span className="text-[0.875rem] text-on-surface-variant font-medium">Girls</span>
              <div className="flex items-center gap-2 text-[0.875rem] font-medium">
                <span className="material-symbols-outlined text-primary text-[1rem] shrink-0">calendar_today</span>
                May 19 – 21
              </div>
              <div className="flex items-center gap-2 text-[0.875rem] font-medium">
                <span className="material-symbols-outlined text-primary text-[1rem] shrink-0">schedule</span>
                5:30 PM – 7:00 PM
              </div>
            </div>
            {/* U15–U19 Boys row */}
            <div className="grid grid-cols-4 items-center px-5 py-4 hover:bg-surface-low/30 transition-colors">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[1rem] shrink-0">sports_soccer</span>
                <span className="font-display font-bold text-[0.95rem]">U15 – U19</span>
              </div>
              <span className="text-[0.875rem] text-on-surface-variant font-medium">Boys</span>
              <div className="flex items-center gap-2 text-[0.875rem] font-medium">
                <span className="material-symbols-outlined text-primary text-[1rem] shrink-0">calendar_today</span>
                May 19 – 21
              </div>
              <div className="flex items-center gap-2 text-[0.875rem] font-medium">
                <span className="material-symbols-outlined text-primary text-[1rem] shrink-0">schedule</span>
                6:30 PM – 8:00 PM
              </div>
            </div>
          </div>
          <p className="mt-3.5 text-[0.8rem] text-on-surface-variant flex items-center gap-1.5">
            <a
              href="/age-group-chart-2026-27.webp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold hover:underline"
            >
              <span className="material-symbols-outlined text-[1rem]">open_in_new</span>
              View the US Club Soccer age group chart (2026–27)
            </a>
          </p>
        </section>
      </>
    )}

      {/* Location */}
      <section aria-label="Tryout location" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up">
        <h3 className="section-heading">Location</h3>
        <div className="bg-surface-lowest rounded-2xl p-5 flex items-center gap-4 card-interactive">
          <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-[1.3rem]">location_on</span>
          </div>
          <div>
            <h4 className="m-0 mb-1 font-display font-bold text-[0.875rem] tracking-[0.02em] uppercase">Summerfield Park</h4>
            <p className="m-0 text-[0.8rem] text-on-surface-variant uppercase tracking-[0.05em] font-medium">2950 Linden Rd, West Sacramento, CA 95691</p>
          </div>
        </div>
      </section>

      {/* Preparation (Hidden when tryouts are done, kept in code) */}
      {showDetails && (
        <section aria-label="Tryout preparation" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up">
          <div className="bg-surface-low rounded-2xl p-5 md:p-7 border border-outline-variant/60">
            <h3 className="section-heading">Preparation</h3>
            <div className="grid gap-5 mt-4">
              {prepItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-surface-highest rounded-xl flex items-center justify-center shrink-0 border border-outline-variant">
                    <span className="material-symbols-outlined text-primary text-[1.2rem]">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="m-0 mb-1 font-bold text-[0.9rem] text-on-surface">{item.title}</h4>
                    <p className="m-0 text-[0.825rem] text-on-surface-variant leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coaching staff link */}
      <section aria-label="Coaching staff" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up pb-4">
        <h3 className="section-heading">Coaching Staff</h3>
        <div className="bg-surface-lowest rounded-2xl p-5 flex items-center gap-4 card-interactive">
          <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-[1.3rem]">groups</span>
          </div>
          <div>
            <h4 className="m-0 mb-1 font-display font-bold text-[0.875rem] tracking-[0.02em] uppercase">Meet the Coaches</h4>
            <p className="m-0 text-[0.8rem] text-on-surface-variant uppercase tracking-[0.05em] font-semibold">
              <Link to="/coaches" className="hover:underline">View the full 2026/2027 coaching roster →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
