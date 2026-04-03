import content from "../content/tryouts.md?raw";
import MarkdownPage from "./MarkdownPage";

export default function TryoutsPage() {
  return (
    <MarkdownPage
      title="Tryouts"
      description="2026 tryout dates, schedule details, location, and preparation guidance for West Sacramento Soccer Club competitive teams."
      content={content}
    />
  );
}
