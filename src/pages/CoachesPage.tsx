import PageMeta from "../components/PageMeta";
import { coaches } from "../data/coaches";

export default function CoachesPage() {
  return (
    <>
      <PageMeta
        title="Coaches"
        description="2025/2026 season coaching roster for West Sacramento FC competitive teams."
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="coaches-title">
        <p className="hero-eyebrow">2025 / 2026 Season</p>
        <h2 id="coaches-title">
          Coaching
          <br />
          Staff.
        </h2>
        <p>
          Experienced coaches across girls and boys teams from U09 through
          U19 — committed to development, competition, and community.
        </p>
      </section>

      {/* Roster */}
      <section aria-label="Coaching roster">
        <h3 className="section-heading">Coaching Roster</h3>
        <div className="coach-grid">
          {coaches.map((coach) => (
            <article key={coach.name} className="coach-card">
              <p className="coach-name">{coach.name}</p>
              <div className="coach-team">
                <span
                  className={`team-badge team-badge--${coach.color.toLowerCase()}`}
                >
                  {coach.color}
                </span>
                <span className="team-label">
                  {coach.year} {coach.gender}
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="coach-note">
          Coaching assignments may be adjusted before the season begins.
          Updated team placement and coaching information will be communicated
          directly to families.
        </p>
      </section>
    </>
  );
}
