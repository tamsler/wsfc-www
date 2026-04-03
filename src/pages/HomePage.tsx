import { Link } from "react-router-dom";
import homeContent from "../content/home.md?raw";
import MarkdownContent from "../components/MarkdownContent";
import PageMeta from "../components/PageMeta";

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description="West Sacramento Soccer Club competitive program overview, dates, and quick access to tryouts, fees, and team information."
      />

      <section className="hero" aria-labelledby="hero-title">
        <p className="hero-eyebrow">2026 Competitive Program</p>
        <h2 id="hero-title">Develop. Compete. Represent West Sac.</h2>
        <p>
          Join one of the region&apos;s most community-driven competitive soccer
          programs for boys and girls U09 through U19.
        </p>
        <div className="hero-actions">
          <Link className="button-primary" to="/tryouts">
            View Tryout Details
          </Link>
          <Link className="button-secondary" to="/fees">
            Review Program Fees
          </Link>
        </div>
      </section>

      <section className="content-card" aria-label="Club overview">
        <MarkdownContent source={homeContent} />
      </section>
    </>
  );
}
