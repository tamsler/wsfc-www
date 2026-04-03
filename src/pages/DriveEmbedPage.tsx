import PageMeta from "../components/PageMeta";
import { buildDrivePreviewUrl, buildDriveViewUrl } from "../data/driveDocs";

type DriveEmbedPageProps = {
  title: string;
  description: string;
  docId: string;
};

export default function DriveEmbedPage({
  title,
  description,
  docId,
}: DriveEmbedPageProps) {
  const previewUrl = buildDrivePreviewUrl(docId);
  const viewUrl = buildDriveViewUrl(docId);

  return (
    <>
      <PageMeta title={title} description={description} />
      <section className="content-card" aria-labelledby="page-title">
        <header className="content-card-header">
          <h2 id="page-title">{title}</h2>
          <p>
            If the embedded document does not load due to permissions, open it
            in a new tab.
          </p>
          <a
            className="button-secondary"
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Document in New Tab
          </a>
        </header>

        <div className="embed-wrap">
          <iframe
            src={previewUrl}
            title={`${title} document preview`}
            className="embed-frame"
            loading="lazy"
            allow="autoplay"
          />
        </div>
      </section>
    </>
  );
}
