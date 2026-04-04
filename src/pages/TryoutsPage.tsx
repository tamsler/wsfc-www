import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

const sessions = [
  {
    label: "Session One",
    title: "U09 – U14",
    chip: "YOUTH",
    chipClass: "session-chip--youth",
    dates: "MAY 12 – 14, 2026",
    time: "5:30 PM – 8:00 PM",
  },
  {
    label: "Session Two",
    title: "U15 – U19",
    chip: "SENIOR",
    chipClass: "session-chip--senior",
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
        <h2 id="tryouts-title">
          Join
          <br />
          The Elite.
        </h2>
        <p>
          Girls and boys from U09 through U19. Two tryout windows — register
          early and come prepared to compete.
        </p>
        <div className="hero-actions">
          <a
            className="button-primary"
            href="https://westsaccompsoccer.byga.net/tryouts/460xkgbu42/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            2026 Tryouts Registration
          </a>
          <a className="button-secondary" href="mailto:doc@westsaccompsoccer.org">
            Questions? Email Us
          </a>
        </div>
      </section>

      {/* Session cards */}
      <section aria-label="Tryout sessions">
        <h3 className="section-heading">Tryout Windows</h3>
        <div className="session-grid">
          {sessions.map((s) => (
            <div key={s.label} className="session-card">
              <div className="session-card-top">
                <div>
                  <p className="session-label">{s.label}</p>
                  <h3 className="session-title">{s.title}</h3>
                </div>
                <span className={`session-chip ${s.chipClass}`}>{s.chip}</span>
              </div>
              <div style={{ display: "grid", gap: "0.6rem" }}>
                <div className="session-detail">
                  <span className="material-symbols-outlined">calendar_today</span>
                  {s.dates}
                </div>
                <div className="session-detail">
                  <span className="material-symbols-outlined">schedule</span>
                  {s.time}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            marginTop: "0.75rem",
            fontSize: "0.8rem",
            color: "var(--on-surface-variant)",
          }}
        >
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

      {/* Location */}
      <section aria-label="Tryout location">
        <h3 className="section-heading">Location</h3>
        <div className="location-card">
          <div className="location-icon">
            <span className="material-symbols-outlined">location_on</span>
          </div>
          <div>
            <h4>Summerfield Park</h4>
            <p>2950 Linden Rd, West Sacramento, CA 95691</p>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section aria-label="Tryout preparation">
        <div className="prep-section">
          <h3 className="section-heading">Preparation</h3>
          <div className="prep-list">
            {prepItems.map((item) => (
              <div key={item.title} className="prep-item">
                <div className="prep-icon">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching staff link */}
      <section aria-label="Coaching staff">
        <h3 className="section-heading">Coaching Staff</h3>
        <div className="location-card">
          <div className="location-icon">
            <span className="material-symbols-outlined">groups</span>
          </div>
          <div>
            <h4>Meet the Coaches</h4>
            <p>
              <Link to="/coaches">View the full 2025/2026 coaching roster →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
