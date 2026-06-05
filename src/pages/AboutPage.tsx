import PageMeta from "../components/PageMeta";
import { boardMembers, technicalStaff } from "../data/board";
import { DRIVE_DOCS, buildDriveViewUrl } from "../data/driveDocs";

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About"
        description="Learn about West Sacramento FC — our mission, values, and Board of Directors."
      />

      {/* Hero */}
      <section className="hero animate-fade-in-up" aria-labelledby="about-title">
        <div className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full">
          <p className="hero-eyebrow text-white/85 tracking-[0.15em] font-extrabold">West Sacramento Futbol Club</p>
          <h1 id="about-title">
            About
            <br />
            Our Club.
          </h1>
          <p>
            A community-driven club dedicated to player development, competitive
            soccer, and building lasting connections in West Sacramento.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section aria-labelledby="board-heading" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up animation-delay-100">
        <h3 id="board-heading" className="section-heading">Board of Directors</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[0.65rem] mb-4">
          {boardMembers.map((member) => (
            <article key={member.role} className="bg-surface-lowest rounded-xl py-3.5 px-4 grid gap-[0.45rem] card-interactive">
              <p className="m-0 font-bold text-[0.95rem] leading-tight text-on-surface">{member.name}</p>
              <p className="m-0 text-[0.85rem] text-on-surface-variant font-medium">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Staff */}
      <section aria-labelledby="technical-heading" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up animation-delay-200">
        <h3 id="technical-heading" className="section-heading">Technical Leadership</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[0.65rem] mb-4">
          {technicalStaff.map((member) => (
            <article key={member.role} className="bg-surface-lowest rounded-xl py-3.5 px-4 grid gap-[0.45rem] card-interactive">
              <p className="m-0 font-bold text-[0.95rem] leading-tight text-on-surface">{member.name}</p>
              <p className="m-0 text-[0.85rem] text-on-surface-variant font-medium">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Bylaws */}
      <section aria-labelledby="bylaws-heading" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up">
        <h3 id="bylaws-heading" className="section-heading">Bylaws</h3>
        <div className="bg-surface-lowest rounded-xl py-3.5 px-4 inline-flex gap-3 items-center card-interactive">
          <span className="material-symbols-outlined text-primary">description</span>
          <a
            href={buildDriveViewUrl(DRIVE_DOCS.bylaws.id)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.9rem] font-semibold hover:underline"
          >
            West Sacramento Futbol Club Bylaws
          </a>
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-heading" className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up pb-4">
        <h3 id="contact-heading" className="section-heading">Contact</h3>
        <div className="bg-surface-lowest rounded-xl py-3.5 px-4 inline-flex gap-3 items-center card-interactive">
          <span className="material-symbols-outlined text-primary">mail</span>
          <a href="mailto:info@westsacramentofc.org" className="text-[0.9rem] font-semibold hover:underline">info@westsacramentofc.org</a>
        </div>
      </section>
    </>
  );
}
