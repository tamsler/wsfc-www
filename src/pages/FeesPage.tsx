import content from "../content/fees.md?raw";
import MarkdownPage from "./MarkdownPage";

export default function FeesPage() {
  return (
    <MarkdownPage
      title="Fees"
      description="Registration fee, payment plan, team fee expectations, and uniform kit details for the 2025/26 season."
      content={content}
    />
  );
}
