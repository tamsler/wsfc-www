import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

const sessions = [
  {
    label: "Session One",
    title: "U09 – U14",
    chip: "YOUTH",
    chipClass: "bg-secondary/10 text-secondary",
    dates: "MAY 12 – 14, 2026",
    time: "5:30 PM – 8:00 PM",
  },
  {
    label: "Session Two",
    title: "U15 – U19",
    chip: "SENIOR",
    chipClass: "bg-primary-fixed text-on-primary-fixed-variant",
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
    body: "Bring both a light and a dark training shirt. Label all personal gear.",
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
      <section className="hero" aria-labelledby="tryouts-title">
        <p className="hero-eyebrow">Tryouts 2026</p>
        <h1 id="tryouts-title">
          Join
          <br />
          Our Club.
        </h1>
        <p>
          Girls and boys from U09 through U19. Two tryout windows — register
          early and come prepared to compete.
        </p>
        <div className="hero-actions">
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
        </div>
      </section>

      {/* Session cards */}
      <section aria-label="Tryout sessions">
        <h3 className="section-heading">Tryout Windows</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {sessions.map((s) => (
            <div key={s.label} className="bg-surface-lowest rounded-2xl p-5 grid gap-4">
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
        <p className="mt-3 text-[0.8rem] text-on-surface-variant">
          Exact team schedule published one week before tryouts. See the{" "}
          <a
            href="https://usclubsoccer.org/registration-player-age-groups"
            target="_blank"
            rel="noopener noreferrer"
          >
            US Club Soccer age group chart
          </a>{" "}
          to confirm your player&apos;s group.
        </p>
      </section>

      {/* Schedule */}
      <section aria-label="Tryout schedule">
        <h3 className="section-heading">Schedule</h3>
        <div className="bg-surface-lowest rounded-2xl overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-3 px-5 py-2.5 bg-primary/8">
            <p className="m-0 text-[0.65rem] font-bold tracking-[0.1em] uppercase text-primary">Age Group</p>
            <p className="m-0 text-[0.65rem] font-bold tracking-[0.1em] uppercase text-primary">Gender</p>
            <p className="m-0 text-[0.65rem] font-bold tracking-[0.1em] uppercase text-primary">Time</p>
          </div>
          {/* U9–U12 row */}
          <div className="grid grid-cols-3 items-center px-5 py-4 border-b border-surface-highest">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[1rem] shrink-0">sports_soccer</span>
              <span className="font-display font-bold text-[0.95rem]">U9 – U12</span>
            </div>
            <span className="text-[0.875rem] text-on-surface-variant font-medium">Girls &amp; Boys</span>
            <div className="flex items-center gap-2 text-[0.875rem] font-medium">
              <span className="material-symbols-outlined text-primary text-[1rem] shrink-0">schedule</span>
              5:30 PM – 6:45 PM
            </div>
          </div>
          {/* U13–U14 row */}
          <div className="grid grid-cols-3 items-center px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[1rem] shrink-0">sports_soccer</span>
              <span className="font-display font-bold text-[0.95rem]">U13 – U14</span>
            </div>
            <span className="text-[0.875rem] text-on-surface-variant font-medium">Girls &amp; Boys</span>
            <div className="flex items-center gap-2 text-[0.875rem] font-medium">
              <span className="material-symbols-outlined text-primary text-[1rem] shrink-0">schedule</span>
              6:45 PM – 8:00 PM
            </div>
          </div>
        </div>
        <p className="mt-3 text-[0.8rem] text-on-surface-variant">
          <a
            href="/age-group-chart-2026-27.webp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[1rem]">open_in_new</span>
            View the US Club Soccer age group chart (2026–27)
          </a>
        </p>
      </section>

      {/* Location */}
      <section aria-label="Tryout location">
        <h3 className="section-heading">Location</h3>
        <div className="bg-surface-lowest rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-[1.3rem]">location_on</span>
          </div>
          <div>
            <h4 className="m-0 mb-1 font-display font-bold text-[0.875rem] tracking-[0.02em] uppercase">Summerfield Park</h4>
            <p className="m-0 text-[0.8rem] text-on-surface-variant uppercase tracking-[0.05em]">2950 Linden Rd, West Sacramento, CA 95691</p>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section aria-label="Tryout preparation">
        <div className="bg-surface-low rounded-2xl p-5 md:p-7">
          <h3 className="section-heading">Preparation</h3>
          <div className="grid gap-5">
            {prepItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-surface-highest rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[1.2rem]">{item.icon}</span>
                </div>
                <div>
                  <h4 className="m-0 mb-1 font-bold text-[0.9rem]">{item.title}</h4>
                  <p className="m-0 text-[0.825rem] text-on-surface-variant leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching staff link */}
      <section aria-label="Coaching staff">
        <h3 className="section-heading">Coaching Staff</h3>
        <div className="bg-surface-lowest rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-[1.3rem]">groups</span>
          </div>
          <div>
            <h4 className="m-0 mb-1 font-display font-bold text-[0.875rem] tracking-[0.02em] uppercase">Meet the Coaches</h4>
            <p className="m-0 text-[0.8rem] text-on-surface-variant uppercase tracking-[0.05em]">
              <Link to="/coaches">View the full 2025/2026 coaching roster →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
