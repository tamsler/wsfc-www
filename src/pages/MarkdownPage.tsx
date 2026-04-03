import MarkdownContent from "../components/MarkdownContent";
import PageMeta from "../components/PageMeta";

type MarkdownPageProps = {
  title: string;
  description: string;
  content: string;
};

export default function MarkdownPage({
  title,
  description,
  content,
}: MarkdownPageProps) {
  return (
    <>
      <PageMeta title={title} description={description} />
      <section className="content-card" aria-labelledby="page-title">
        <header className="content-card-header">
          <h2 id="page-title">{title}</h2>
        </header>
        <MarkdownContent source={content} />
      </section>
    </>
  );
}
