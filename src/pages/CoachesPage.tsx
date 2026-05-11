import PageMeta from "../components/PageMeta";
import { coaches } from "../data/coaches";

export default function CoachesPage() {
  return (
    <>
      <PageMeta
        title="Coaches"
        description="2026/2027 season coaching roster for West Sacramento FC competitive teams."
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="coaches-title">
        <p className="hero-eyebrow">2026 / 2027 Season</p>
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
        <div className="overflow-x-auto mb-4 bg-surface-low/30 rounded-xl border border-surface-low">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-surface-low text-on-surface-variant text-[0.85rem] uppercase tracking-wider">
                <th className="py-4 px-5 font-bold">Age Group</th>
                <th className="py-4 px-5 font-bold">Boys</th>
                <th className="py-4 px-5 font-bold">Girls</th>
              </tr>
            </thead>
            <tbody>
              {coaches.map((row) => (
                <tr key={row.ageGroup} className="border-b border-surface-low last:border-0 hover:bg-surface-low/50 transition-colors">
                  <td className="py-3.5 px-5 font-bold whitespace-nowrap">{row.ageGroup}</td>
                  <td className="py-3.5 px-5 text-[0.95rem] text-on-surface">{row.boys}</td>
                  <td className="py-3.5 px-5 text-[0.95rem] text-on-surface">{row.girls}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
