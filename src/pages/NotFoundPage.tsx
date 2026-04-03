import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The page you are looking for does not exist on the West Sacramento Soccer Club site."
      />
      <section className="content-card" aria-labelledby="not-found-title">
        <header className="content-card-header">
          <p className="hero-eyebrow">404</p>
          <h2 id="not-found-title">This page does not exist.</h2>
          <p>
            Return to the homepage to access tryouts, fees, coaches, and other
            club information.
          </p>
          <Link className="button-primary" to="/">
            Go to Home
          </Link>
        </header>
      </section>
    </>
  );
}
