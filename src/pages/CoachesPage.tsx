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
      <section className="hero animate-fade-in-up" aria-labelledby="coaches-title">
        <div className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full">
          <p className="hero-eyebrow text-white/85 tracking-[0.15em] font-extrabold">West Sacramento Futbol Club</p>
          <h1 id="coaches-title">
            Coaching
            <br />
            Staff.
          </h1>
          <p>
            Experienced coaches across girls and boys teams from U09 through
            U19 — committed to development, competition, and community.
          </p>
        </div>
      </section>

      {/* Roster */}
      <section aria-label="Coaching roster" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up animation-delay-100 pb-4">
        <h3 className="section-heading">Coaching Roster</h3>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {coaches.map((row) => (
            <div key={row.ageGroup} className="bg-surface-lowest rounded-2xl p-5 border border-outline-variant/60 flex flex-col gap-4 card-interactive">
              <div className="flex justify-between items-center border-b border-outline-variant/40 pb-2">
                <h4 className="m-0 font-display font-black text-2xl tracking-tight text-primary leading-none">{row.ageGroup}</h4>
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full bg-primary/8 text-primary">Competitive</span>
              </div>
              
              <div className="flex flex-col gap-3.5">
                {/* Boys coach */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-secondary/8 dark:bg-secondary/20 flex items-center justify-center shrink-0 text-secondary dark:text-secondary-container">
                    <span className="material-symbols-outlined text-[1rem]">man</span>
                  </div>
                  <div>
                    <span className="text-[0.6rem] font-bold uppercase tracking-wider text-on-surface-variant block mb-0.5">Boys Coach</span>
                    <span className={`text-[0.875rem] font-semibold leading-normal ${row.boys === "TBD" ? "text-on-surface-variant/60 italic font-medium" : "text-on-surface"}`}>
                      {row.boys}
                    </span>
                  </div>
                </div>

                {/* Girls coach */}
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/8 dark:bg-primary/20 flex items-center justify-center shrink-0 text-primary dark:text-primary-container">
                    <span className="material-symbols-outlined text-[1rem]">woman</span>
                  </div>
                  <div>
                    <span className="text-[0.6rem] font-bold uppercase tracking-wider text-on-surface-variant block mb-0.5">Girls Coach</span>
                    <span className={`text-[0.875rem] font-semibold leading-normal ${row.girls === "TBD" ? "text-on-surface-variant/60 italic font-medium" : "text-on-surface"}`}>
                      {row.girls}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-6 text-[0.85rem] text-on-surface-variant italic">
          Coaching assignments may be adjusted before the season begins.
          Updated team placement and coaching information will be communicated
          directly to families.
        </p>
      </section>
    </>
  );
}
