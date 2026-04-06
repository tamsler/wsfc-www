import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The page you are looking for does not exist on the West Sacramento Soccer Club Competitive Program site."
      />
      <section className="bg-surface-lowest rounded-2xl p-5 sm:p-7" aria-labelledby="not-found-title">
        <header className="mb-4">
          <p className="m-0 mb-1 font-display font-bold text-[0.75rem] tracking-[0.14em] uppercase text-on-surface-variant/75 italic">404</p>
          <h1 id="not-found-title" className="m-0 mb-3 font-display font-bold text-2xl sm:text-[2rem] tracking-[-0.02em] uppercase">This page does not exist.</h1>
          <p className="m-0 text-[0.9rem] text-on-surface-variant mb-6 leading-relaxed max-w-lg">
            Return to the homepage to access tryouts, fees, coaches, and other
            club information.
          </p>
          <Link className="btn-solid" to="/">
            Go to Home
          </Link>
        </header>
      </section>
    </>
  );
}
