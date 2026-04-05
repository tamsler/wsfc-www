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
  const headingId = `${title.toLowerCase().replace(/\s+/g, "-")}-title`;

  return (
    <>
      <PageMeta title={title} description={description} />
      <section className="bg-surface-lowest rounded-2xl p-5 sm:p-7" aria-labelledby={headingId}>
        <header className="mb-4">
          <h1 id={headingId} className="m-0 mb-1 font-display font-bold text-2xl sm:text-[2rem] tracking-[-0.02em] uppercase">{title}</h1>
          <p className="m-0 text-[0.9rem] text-on-surface-variant mb-4">
            If the embedded document does not load due to permissions, open it
            in a new tab.
          </p>
          <a
            className="btn-surface"
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Document in New Tab
          </a>
        </header>

        <div className="rounded-xl overflow-hidden bg-surface-low mt-4">
          <iframe
            src={previewUrl}
            title={`${title} document preview`}
            className="w-full min-h-[72vh] border-0"
            loading="lazy"
            allow="autoplay"
          />
        </div>
      </section>
    </>
  );
}
