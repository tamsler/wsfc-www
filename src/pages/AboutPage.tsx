import PageMeta from "../components/PageMeta";

type BoardMember = {
  role: string;
  name: string;
};

const boardMembers: BoardMember[] = [
  { role: "President", name: "Richard Novoa" },
  { role: "Vice President", name: "Guillermo Villegas, Jr." },
  { role: "Secretary", name: "Yolanda Villegas" },
  { role: "Treasurer", name: "My Huynh" },
  { role: "Registrar", name: "Cristina Lopez" },
] satisfies BoardMember[];

const technicalStaff: BoardMember[] = [
  { role: "Director of Coaching", name: "Thomas Amsler" },
] satisfies BoardMember[];

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about West Sacramento FC — our mission, values, and Board of Directors."
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="about-title">
        <h2 id="about-title">
          About
          <br />
          West Sacramento FC.
        </h2>
        <p>
          A community-driven club dedicated to player development, competitive
          soccer, and building lasting connections in West Sacramento.
        </p>
      </section>

      {/* Board of Directors */}
      <section aria-labelledby="board-heading">
        <h3 id="board-heading" className="section-heading">Board of Directors</h3>
        <div className="coach-grid">
          {boardMembers.map((member) => (
            <article key={member.role} className="coach-card">
              <p className="coach-name">{member.name}</p>
              <p className="coach-role">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Staff */}
      <section aria-labelledby="technical-heading">
        <h3 id="technical-heading" className="section-heading">Director of Coaching</h3>
        <div className="coach-grid">
          {technicalStaff.map((member) => (
            <article key={member.role} className="coach-card">
              <p className="coach-name">{member.name}</p>
              <p className="coach-role">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-heading">
        <h3 id="contact-heading" className="section-heading">Contact</h3>
        <div className="coach-card" style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
          <span className="material-symbols-outlined">mail</span>
          <a href="mailto:doc@westsacramentofc.org">doc@westsacramentofc.org</a>
        </div>
      </section>
    </>
  );
}
