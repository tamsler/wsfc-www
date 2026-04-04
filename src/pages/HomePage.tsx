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
        <h2 id="hero-title">
          Develop.
          <br />
          Compete.
          <br />
          Represent.
        </h2>
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
          <Link className="button-primary" to="/tryouts">
            Tryout Details
          </Link>
          <Link className="button-secondary" to="/fees">
            Program Fees
          </Link>
        </div>
      </section>

      {/* Why WSFC */}
      <section aria-label="Why choose West Sacramento FC">
        <h3 className="section-heading">Why Families Choose WSFC</h3>
        <div
          style={{
            display: "grid",
            gap: "0.65rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          }}
        >
          {whyItems.map((item) => (
            <div key={item.title} className="quick-link-card" style={{ gap: "0.65rem" }}>
              <div className="quick-link-icon">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div>
                <p
                  style={{
                    margin: "0 0 0.2rem",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.8rem",
                    color: "var(--on-surface-variant)",
                    lineHeight: 1.5,
                  }}
                >
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
        <div className="quick-links-grid">
          {quickLinks.map((link) => (
            <Link key={link.to} to={link.to} className="quick-link-card">
              <div className="quick-link-icon">
                <span className="material-symbols-outlined">{link.icon}</span>
              </div>
              <span className="label">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Affiliates */}
      <section aria-label="League affiliations">
        <h3 className="section-heading">Affiliations</h3>
        <div className="affiliates-row">
          <img src="/us-club-soccer.webp" alt="US Club Soccer" className="affiliate-logo" />
          <img src="/NORCAL_Logo.webp" alt="NorCal Premier Soccer" className="affiliate-logo" />
        </div>
      </section>
    </>
  );
}
