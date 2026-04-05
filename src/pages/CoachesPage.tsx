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
        <h1 id="coaches-title">
          Coaching
          <br />
          Staff.
        </h1>
        <p>
          Experienced coaches across girls and boys teams from U09 through
          U19 — committed to development, competition, and community.
        </p>
      </section>

      {/* Roster */}
      <section aria-label="Coaching roster">
        <h3 className="section-heading">Coaching Roster</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[0.65rem] mb-4">
          {coaches.map((coach) => (
            <article key={`${coach.name}-${coach.year}-${coach.gender}`} className="bg-surface-low rounded-xl py-3.5 px-4 grid gap-[0.45rem]">
              <p className="m-0 font-bold text-[0.95rem] leading-tight">{coach.name}</p>
              <div className="flex items-center gap-[0.45rem]">
                <span
                  className={`text-[0.65rem] font-bold uppercase tracking-[0.06em] px-2 py-0.5 rounded-full ${
                    coach.color === "Red"
                      ? "bg-primary/10 text-[#920700]"
                      : "bg-[#2e5ab5]/10 text-[#06419c]"
                  }`}
                >
                  {coach.color}
                </span>
                <span className="text-[0.82rem] text-on-surface-variant">
                  {coach.year} {coach.gender}
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="m-0 text-[0.85rem] text-on-surface-variant italic">
          Coaching assignments may be adjusted before the season begins.
          Updated team placement and coaching information will be communicated
          directly to families.
        </p>
      </section>
    </>
  );
}
