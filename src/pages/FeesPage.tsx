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
      <section className="hero" aria-labelledby="fees-title">
        <p className="hero-eyebrow">2026 / 2027 Season</p>
        <h1 id="fees-title">
          Program
          <br />
          Fees.
        </h1>
        <p>
          Transparent pricing for the competitive season — registration,
          payment plans, team costs, and uniform details.
        </p>
      </section>

      {/* Registration fee */}
      <section aria-label="Registration fee">
        <h3 className="section-heading">Club Registration</h3>
        <div className="bg-surface-lowest rounded-2xl p-5 grid gap-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-secondary m-0 mb-1">2026 / 2027 Season</p>
              <h3 className="m-0 font-display font-bold text-[2.5rem] tracking-[-0.02em]">
                $335
              </h3>
            </div>
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.08em] px-[0.6rem] py-[0.2rem] rounded-full whitespace-nowrap bg-secondary/10 text-secondary">Per Player</span>
          </div>
          <div className="grid gap-[0.65rem]">
            {included.map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-on-surface-variant text-[0.875rem] font-medium">
                <span className="material-symbols-outlined text-primary text-[1.1rem] shrink-0">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment options */}
      <section aria-label="Payment options">
        <h3 className="section-heading">Payment Options</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Pay in full */}
          <div className="bg-surface-lowest rounded-2xl p-5 grid gap-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-secondary m-0 mb-1">Option 1</p>
                <h3 className="m-0 font-display font-bold text-2xl tracking-[-0.02em]">Pay in Full</h3>
              </div>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.08em] px-[0.6rem] py-[0.2rem] rounded-full whitespace-nowrap bg-secondary/10 text-secondary">Simplest</span>
            </div>
            <div className="flex items-center gap-3 text-on-surface-variant text-[0.875rem] font-medium">
              <span className="material-symbols-outlined text-primary text-[1.1rem] shrink-0">payments</span>
              <span>One payment of <strong>$335</strong> at registration</span>
            </div>
          </div>

          {/* Payment plan */}
          <div className="bg-surface-lowest rounded-2xl p-5 grid gap-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[0.65rem] font-bold tracking-[0.1em] uppercase text-secondary m-0 mb-1">Option 2</p>
                <h3 className="m-0 font-display font-bold text-2xl tracking-[-0.02em]">Payment Plan</h3>
              </div>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.08em] px-[0.6rem] py-[0.2rem] rounded-full whitespace-nowrap bg-primary-fixed text-on-primary-fixed-variant">6 Payments</span>
            </div>
            <div className="grid gap-[0.45rem]">
              {paymentPlan.map((p) => (
                <div
                  key={p.due}
                  className="flex justify-between items-center text-[0.85rem]"
                >
                  <span className="text-on-surface-variant">
                    {p.due}
                  </span>
                  <span className="font-bold">{p.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team fee */}
      <section aria-label="Team fee">
        <h3 className="section-heading">Team Fee</h3>
        <div className="bg-surface-low rounded-2xl p-5 md:p-7">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-surface-highest rounded-xl flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-[1.2rem]">paid</span>
            </div>
            <div>
              <h4 className="m-0 mb-1 font-bold text-[0.9rem]">$350 – $550 per year</h4>
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
      <section aria-label="Uniform">
        <h3 className="section-heading">Uniform Kit</h3>
        <div className="bg-surface-low rounded-2xl p-5 md:p-7">
          <div className="grid gap-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-surface-highest rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[1.2rem]">apparel</span>
              </div>
              <div>
                <h4 className="m-0 mb-1 font-bold text-[0.9rem]">Purchased Separately: $190 + shipping</h4>
                <p className="m-0 text-[0.825rem] text-on-surface-variant leading-relaxed">
                  The uniform kit is not included in the registration fee.
                  Typical kit includes three jerseys, two shorts, and two pairs
                  of socks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-surface-highest rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[1.2rem]">info</span>
              </div>
              <div>
                <h4 className="m-0 mb-1 font-bold text-[0.9rem]">Ordering Details</h4>
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
