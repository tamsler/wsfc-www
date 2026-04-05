import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The page you are looking for does not exist on the West Sacramento Futbol Club site."
      />
      <section className="bg-surface-lowest rounded-2xl p-5 sm:p-7" aria-labelledby="not-found-title">
        <header className="mb-4">
          <p className="m-0 mb-1 font-display font-bold text-[0.75rem] tracking-[0.14em] uppercase text-on-surface-variant/75 italic">404</p>
          <h2 id="not-found-title" className="m-0 mb-3 font-display font-bold text-2xl sm:text-[2rem] tracking-[-0.02em] uppercase">This page does not exist.</h2>
          <p className="m-0 text-[0.9rem] text-on-surface-variant mb-6 leading-relaxed max-w-lg">
            Return to the homepage to access tryouts, fees, coaches, and other
            club information.
          </p>
          <Link className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl font-sans font-bold text-xs tracking-widest uppercase bg-primary text-white shadow-md hover:-translate-y-px hover:shadow-lg transition-all no-underline" to="/">
            Go to Home
          </Link>
        </header>
      </section>
    </>
  );
}
