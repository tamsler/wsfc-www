import PageMeta from "../components/PageMeta";

import { boardMembers, technicalStaff } from "../data/board";

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
        <h3 id="board-heading" className="font-display font-bold text-lg tracking-[-0.01em] uppercase flex items-center gap-3 mb-4 after:content-[''] after:flex-1 after:h-[2px] after:bg-primary/10">Board of Directors</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[0.65rem] mb-4">
          {boardMembers.map((member) => (
            <article key={member.role} className="bg-surface-low rounded-xl py-3.5 px-4 grid gap-[0.45rem]">
              <p className="m-0 font-bold text-[0.95rem] leading-tight">{member.name}</p>
              <p className="m-0 text-[0.85rem] text-on-surface-variant">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Staff */}
      <section aria-labelledby="technical-heading">
        <h3 id="technical-heading" className="font-display font-bold text-lg tracking-[-0.01em] uppercase flex items-center gap-3 mb-4 after:content-[''] after:flex-1 after:h-[2px] after:bg-primary/10">Director of Coaching</h3>
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
        <h3 id="contact-heading" className="font-display font-bold text-lg tracking-[-0.01em] uppercase flex items-center gap-3 mb-4 after:content-[''] after:flex-1 after:h-[2px] after:bg-primary/10">Contact</h3>
        <div className="bg-surface-low rounded-xl py-3.5 px-4 inline-flex gap-2 items-center">
          <span className="material-symbols-outlined">mail</span>
          <a href="mailto:doc@westsacramentofc.org">doc@westsacramentofc.org</a>
        </div>
      </section>
    </>
  );
}
