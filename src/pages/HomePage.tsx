import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

const quickLinks = [
  { to: "/tryouts", label: "Tryouts", icon: "campaign" },
  { to: "/fees", label: "Fees", icon: "payments" },
  { to: "/coaches", label: "Coaches", icon: "groups" },
  { to: "/code-of-conduct", label: "Code of Conduct", icon: "gavel" },
  { to: "/fields", label: "Fields", icon: "location_on" },
  { to: "/about", label: "About", icon: "info" },
];

const whyItems = [
  {
    icon: "emoji_events",
    title: "Competitive Pathway",
    body: "U09 through U19 — structured development from youth through pre-collegiate.",
  },
  {
    icon: "groups",
    title: "Community Roots",
    body: "Local training environment with deep West Sacramento ties and strong team culture.",
  },
  {
    icon: "trending_up",
    title: "Player Development",
    body: "Focus on technical growth, game understanding, and character on and off the pitch.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description="West Sacramento FC competitive program overview, dates, and quick access to tryouts, fees, and team information."
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <p className="hero-eyebrow">2026 Competitive Season</p>
        <h1 id="hero-title">
          Develop.
          <br />
          Compete.
          <br />
          Represent.
        </h1>
        <p>
          Join one of the region&apos;s most community-driven competitive
          soccer programs for boys and girls U09 through U19.
        </p>

        <div className="hero-dates">
          <div className="hero-date-row">
            <span className="material-symbols-outlined">calendar_today</span>
            U09 – U14: MAY 12 – 14, 2026
          </div>
          <div className="hero-date-row">
            <span className="material-symbols-outlined">calendar_today</span>
            U15 – U19: MAY 19 – 21, 2026
          </div>
        </div>

        <div className="hero-actions">
          <Link className="btn-hero-primary" to="/tryouts">
            Tryout Details
          </Link>
          <Link className="btn-hero-ghost" to="/fees">
            Program Fees
          </Link>
        </div>
      </section>

      {/* Why WSFC */}
      <section aria-label="Why choose West Sacramento FC">
        <h3 className="section-heading">Why Families Choose WSFC</h3>
        <div className="grid gap-[0.65rem] grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
          {whyItems.map((item) => (
            <div key={item.title} className="bg-surface-low rounded-2xl p-4 text-on-surface flex flex-col gap-2.5 transition-colors hover:bg-surface">
              <div className="w-9 h-9 bg-primary/8 rounded-xl flex items-center justify-center text-primary text-[1.1rem]">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <p className="m-0 mb-1 font-bold text-[0.85rem]">
                  {item.title}
                </p>
                <p className="m-0 text-[0.8rem] text-on-surface-variant leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section aria-label="Quick links">
        <h3 className="section-heading">Quick Access</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {quickLinks.map((link) => (
            <Link key={link.to} to={link.to} className="bg-surface-low rounded-2xl p-4 no-underline text-on-surface flex flex-col gap-2 transition-colors hover:bg-surface">
              <div className="w-9 h-9 bg-primary/8 rounded-xl flex items-center justify-center text-primary text-[1.1rem]">
                <span className="material-symbols-outlined">{link.icon}</span>
              </div>
              <span className="text-[0.75rem] font-bold uppercase tracking-wider text-on-surface">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Affiliates */}
      <section aria-label="League affiliations">
        <h3 className="section-heading">Affiliations</h3>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <img src="/us-club-soccer.webp" alt="US Club Soccer" className="h-[4.5rem] w-auto block opacity-85" loading="lazy" />
          <img src="/norcal.webp" alt="NorCal Premier Soccer" className="h-[4.5rem] w-auto block opacity-85" loading="lazy" />
        </div>
      </section>
    </>
  );
}
