import PageMeta from "../components/PageMeta";

import { boardMembers, technicalStaff } from "../data/board";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about WSSC : Competitive Program — our mission, values, and Competitive Program Committee."
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="about-title">
        <h1 id="about-title">
          About
          <br />
          WSSC : Competitive Program
        </h1>
        <p>
          A community-driven club dedicated to player development, competitive
          soccer, and building lasting connections in West Sacramento.
        </p>
      </section>

      {/* Competitive Program Committee */}
      <section aria-labelledby="board-heading">
        <h3 id="board-heading" className="section-heading">Competitive Program Committee</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[0.65rem] mb-4">
          {boardMembers.map((member) => (
            <article key={member.name} className="bg-surface-low rounded-xl py-3.5 px-4 grid gap-[0.45rem]">
              <p className="m-0 font-bold text-[0.95rem] leading-tight">{member.name}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Staff */}
      <section aria-labelledby="technical-heading">
        <h3 id="technical-heading" className="section-heading">Director of Coaching</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[0.65rem] mb-4">
          {technicalStaff.map((member) => (
            <article key={member.role} className="bg-surface-low rounded-xl py-3.5 px-4 grid gap-[0.45rem]">
              <p className="m-0 font-bold text-[0.95rem] leading-tight">{member.name}</p>
              <p className="m-0 text-[0.85rem] text-on-surface-variant">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-heading">
        <h3 id="contact-heading" className="section-heading">Contact</h3>
        <div className="bg-surface-low rounded-xl py-3.5 px-4 inline-flex gap-2 items-center">
          <span className="material-symbols-outlined">mail</span>
          <a href="mailto:doc@westsacramentofc.org">doc@westsacramentofc.org</a>
        </div>
      </section>
    </>
  );
}
