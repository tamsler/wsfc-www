import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The page you are looking for does not exist on the West Sacramento Futbol Club site."
      />
      <section className="max-w-[680px] md:max-w-[900px] mx-auto px-5 w-full animate-fade-in-up" aria-labelledby="not-found-title">
        <div className="bg-surface-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant/60">
          <header>
            <p className="m-0 mb-1 font-display font-bold text-[0.75rem] tracking-[0.14em] uppercase text-on-surface-variant/75 italic">404 Error</p>
            <h1 id="not-found-title" className="m-0 mb-3 font-display font-bold text-2xl sm:text-[2.2rem] tracking-tight uppercase leading-none text-primary">This page does not exist.</h1>
            <p className="m-0 text-[0.9rem] text-on-surface-variant mb-6 leading-relaxed max-w-lg">
              Return to the homepage to access tryouts, fees, coaches, and other
              club information.
            </p>
            <Link className="btn-solid" to="/">
              Go to Home
            </Link>
          </header>
        </div>
      </section>
    </>
  );
}
