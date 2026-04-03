import PageMeta from "../components/PageMeta";
import { coaches } from "../data/coaches";

export default function CoachesPage() {
  return (
    <>
      <PageMeta
        title="Coaches"
        description="2025/2026 season coaching roster for West Sacramento Soccer Club competitive teams."
      />
      <section className="content-card" aria-labelledby="page-title">
        <header className="content-card-header">
          <h2 id="page-title">Coaches</h2>
          <p>2025 / 2026 Season &mdash; Competitive Program Coaching Roster</p>
        </header>

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
