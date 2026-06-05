
import PageMeta from "../components/PageMeta";



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
        description="West Sacramento Futbol Club competitive program overview, coaching roster, fees, and club information."
      />

      {/* Hero */}
      <section className="hero animate-fade-in-up" aria-labelledby="hero-title">
        <div className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full">
          <p className="hero-eyebrow text-white/85 tracking-[0.15em] font-extrabold">West Sacramento Futbol Club</p>
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

          <div className="hero-actions">
            <a className="btn-hero-primary" href="mailto:doc@westsacramentofc.org">
              Join the Club
            </a>
          </div>
        </div>
      </section>

      {/* Why WSFC */}
      <section aria-label="Why choose West Sacramento FC" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up animation-delay-100">
        <h3 className="section-heading">Why Families Choose WSFC</h3>
        <div className="grid gap-[0.65rem] grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
          {whyItems.map((item) => (
            <div key={item.title} className="bg-surface-low rounded-2xl p-4 text-on-surface flex flex-col gap-2.5 transition-colors card-interactive">
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



      {/* Affiliates */}
      <section aria-label="League affiliations" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up animation-delay-300 pb-4">
        <h3 className="section-heading">Affiliations</h3>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <img src="/us-club-soccer.webp" alt="US Club Soccer" className="h-[4.5rem] w-auto block opacity-80 hover:opacity-100 transition-opacity duration-200 dark:brightness-110" loading="lazy" />
          <img src="/norcal.webp" alt="NorCal Premier Soccer" className="h-[4.5rem] w-auto block opacity-80 hover:opacity-100 transition-opacity duration-200 dark:brightness-110" loading="lazy" />
        </div>
      </section>
    </>
  );
}
