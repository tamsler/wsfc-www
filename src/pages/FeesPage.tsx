import PageMeta from "../components/PageMeta";

const included = [
  { icon: "badge", text: "US Club Soccer player and coach membership fee" },
  { icon: "park", text: "City field access" },
  { icon: "sports_soccer", text: "NorCal fall and spring league home game referee fees" },
  { icon: "inventory_2", text: "Club equipment" },
  { icon: "receipt_long", text: "Registration transaction and admin fees" },
];

const paymentPlan = [
  { due: "At registration", amount: "$80" },
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
        <p className="hero-eyebrow">2025 / 2026 Season</p>
        <h2 id="fees-title">
          Program
          <br />
          Fees.
        </h2>
        <p>
          Transparent pricing for the competitive season — registration,
          payment plans, team costs, and uniform details.
        </p>
      </section>

      {/* Registration fee */}
      <section aria-label="Registration fee">
        <h3 className="section-heading">Club Registration</h3>
        <div
          className="session-card"
          style={{ background: "var(--surface-container-lowest)" }}
        >
          <div className="session-card-top">
            <div>
              <p className="session-label">2025 / 2026 Season</p>
              <h3 className="session-title" style={{ fontSize: "2.5rem" }}>
                $330
              </h3>
            </div>
            <span className="session-chip session-chip--youth">Per Player</span>
          </div>
          <div style={{ display: "grid", gap: "0.65rem" }}>
            {included.map((item) => (
              <div key={item.text} className="session-detail">
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment options */}
      <section aria-label="Payment options">
        <h3 className="section-heading">Payment Options</h3>
        <div className="session-grid">
          {/* Pay in full */}
          <div className="session-card">
            <div className="session-card-top">
              <div>
                <p className="session-label">Option 1</p>
                <h3 className="session-title">Pay in Full</h3>
              </div>
              <span className="session-chip session-chip--youth">Simplest</span>
            </div>
            <div className="session-detail">
              <span className="material-symbols-outlined">payments</span>
              One payment of <strong>$330</strong> at registration
            </div>
          </div>

          {/* Payment plan */}
          <div className="session-card">
            <div className="session-card-top">
              <div>
                <p className="session-label">Option 2</p>
                <h3 className="session-title">Payment Plan</h3>
              </div>
              <span className="session-chip session-chip--senior">6 Payments</span>
            </div>
            <div style={{ display: "grid", gap: "0.45rem" }}>
              {paymentPlan.map((p) => (
                <div
                  key={p.due}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.85rem",
                  }}
                >
                  <span style={{ color: "var(--on-surface-variant)" }}>
                    {p.due}
                  </span>
                  <span style={{ fontWeight: 700 }}>{p.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team fee */}
      <section aria-label="Team fee">
        <h3 className="section-heading">Team Fee</h3>
        <div className="prep-section">
          <div className="prep-item">
            <div className="prep-icon">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <div>
              <h4>$350 – $550 per year</h4>
              <p>
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
        <div className="prep-section">
          <div className="prep-list">
            <div className="prep-item">
              <div className="prep-icon">
                <span className="material-symbols-outlined">checkroom</span>
              </div>
              <div>
                <h4>Purchased Separately — ~$120 + shipping</h4>
                <p>
                  The uniform kit is not included in the registration fee.
                  Typical kit includes three jerseys, two shorts, and two pairs
                  of socks.
                </p>
              </div>
            </div>
            <div className="prep-item">
              <div className="prep-icon">
                <span className="material-symbols-outlined">info</span>
              </div>
              <div>
                <h4>Ordering Details</h4>
                <p>
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
