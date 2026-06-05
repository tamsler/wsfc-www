import PageMeta from "../components/PageMeta";

const included = [
  { icon: "badge", text: "US Club Soccer player and coach membership fee" },
  { icon: "park", text: "City field access" },
  { icon: "sports_soccer", text: "NorCal fall and spring league home game referee fees" },
  { icon: "inventory_2", text: "Club equipment" },
  { icon: "receipt_long", text: "Registration transaction and admin fees" },
];

const paymentPlan = [
  { due: "At registration", amount: "$85" },
  { due: "July 1", amount: "$50" },
  { due: "August 1", amount: "$50" },
  { due: "September 1", amount: "$50" },
  { due: "October 1", amount: "$50" },
  { due: "November 1", amount: "$50" },
];

export default function FeesPage() {
  return (
    <>
      <PageMeta
        title="Fees"
        description="Registration fee, payment plan, team fee expectations, and uniform kit details for the 2025/26 season."
      />

      {/* Hero */}
      <section className="hero animate-fade-in-up" aria-labelledby="fees-title">
        <div className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full">
          <p className="hero-eyebrow text-white/85 tracking-[0.15em] font-extrabold">West Sacramento Futbol Club</p>
          <h1 id="fees-title">
            Program
            <br />
            Fees.
          </h1>
          <p>
            Transparent pricing for the competitive season — registration,
            payment plans, team costs, and uniform details.
          </p>
        </div>
      </section>

      {/* Registration fee */}
      <section aria-label="Registration fee" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up animation-delay-100">
        <h3 className="section-heading">Club Registration</h3>
        <div className="bg-surface-lowest rounded-2xl p-6 grid gap-5 card-interactive">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-secondary m-0 mb-1">2026 / 2027 Season</p>
              <h3 className="m-0 font-display font-bold text-[2.8rem] tracking-[-0.02em] leading-tight">
                $335
              </h3>
            </div>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.08em] px-[0.75rem] py-[0.25rem] rounded-full whitespace-nowrap bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-container">Per Player</span>
          </div>
          <div className="grid gap-[0.75rem] border-t border-outline-variant/60 pt-4">
            {included.map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-on-surface-variant text-[0.875rem] font-medium">
                <span className="material-symbols-outlined text-primary text-[1.1rem] shrink-0">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment options */}
      <section aria-label="Payment options" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up animation-delay-200">
        <h3 className="section-heading">Payment Options</h3>
        <div className="grid gap-4 sm:grid-cols-2 items-start">
          {/* Pay in full */}
          <div className="bg-surface-lowest rounded-2xl p-6 grid gap-5 card-interactive h-full">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-secondary m-0 mb-1">Option 1</p>
                <h3 className="m-0 font-display font-bold text-2xl tracking-[-0.02em]">Pay in Full</h3>
              </div>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.08em] px-[0.6rem] py-[0.2rem] rounded-full whitespace-nowrap bg-primary-fixed text-on-primary-fixed-variant dark:bg-primary/20 dark:text-primary">Simplest</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant text-[0.875rem] font-medium border-t border-outline-variant/60 pt-4">
              <span className="material-symbols-outlined text-primary text-[1.2rem] shrink-0">payments</span>
              <span>One payment of <strong>$335</strong> at registration</span>
            </div>
          </div>

          {/* Payment plan */}
          <div className="bg-surface-lowest rounded-2xl p-6 grid gap-5 card-interactive h-full">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-secondary m-0 mb-1">Option 2</p>
                <h3 className="m-0 font-display font-bold text-2xl tracking-[-0.02em]">Payment Plan</h3>
              </div>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.08em] px-[0.6rem] py-[0.2rem] rounded-full whitespace-nowrap bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-container">6 Payments</span>
            </div>
            <div className="grid gap-[0.55rem] border-t border-outline-variant/60 pt-4">
              {paymentPlan.map((p) => (
                <div
                  key={p.due}
                  className="flex justify-between items-center text-[0.85rem] border-b border-outline-variant/30 last:border-0 pb-1 last:pb-0"
                >
                  <span className="text-on-surface-variant font-medium">
                    {p.due}
                  </span>
                  <span className="font-bold text-on-surface">{p.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team fee */}
      <section aria-label="Team fee" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up">
        <h3 className="section-heading">Team Fee</h3>
        <div className="bg-surface-low rounded-2xl p-5 md:p-7 border border-outline-variant/60">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-surface-highest rounded-xl flex items-center justify-center shrink-0 border border-outline-variant">
              <span className="material-symbols-outlined text-primary text-[1.2rem]">paid</span>
            </div>
            <div>
              <h4 className="m-0 mb-1 font-bold text-[0.95rem] text-on-surface">$350 – $550 per year</h4>
              <p className="m-0 text-[0.825rem] text-on-surface-variant leading-relaxed">
                In addition to club registration, each team typically collects a
                team fee to cover league entries, State Cup referees,
                tournaments, team equipment, and other team-specific costs.
                Exact amount is set by each team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uniform */}
      <section aria-label="Uniform" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up pb-4">
        <h3 className="section-heading">Uniform Kit</h3>
        <div className="bg-surface-low rounded-2xl p-5 md:p-7 border border-outline-variant/60">
          <div className="grid gap-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-surface-highest rounded-xl flex items-center justify-center shrink-0 border border-outline-variant">
                <span className="material-symbols-outlined text-primary text-[1.2rem]">apparel</span>
              </div>
              <div>
                <h4 className="m-0 mb-1 font-bold text-[0.95rem] text-on-surface">Purchased Separately: $190 + shipping</h4>
                <p className="m-0 text-[0.825rem] text-on-surface-variant leading-relaxed">
                  The uniform kit is not included in the registration fee.
                  Typical kit includes three jerseys, two shorts, and two pairs
                  of socks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-surface-highest rounded-xl flex items-center justify-center shrink-0 border border-outline-variant">
                <span className="material-symbols-outlined text-primary text-[1.2rem]">info</span>
              </div>
              <div>
                <h4 className="m-0 mb-1 font-bold text-[0.95rem] text-on-surface">Ordering Details</h4>
                <p className="m-0 text-[0.825rem] text-on-surface-variant leading-relaxed">
                  Uniform ordering instructions will be communicated to
                  registered families before the season begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
