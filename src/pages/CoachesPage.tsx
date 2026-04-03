import content from "../content/coaches.md?raw";
import MarkdownPage from "./MarkdownPage";

export default function CoachesPage() {
  return (
    <MarkdownPage
      title="Coaches"
      description="2025/2026 season coaching roster for West Sacramento Soccer Club competitive teams."
      content={content}
    />
  );
}
