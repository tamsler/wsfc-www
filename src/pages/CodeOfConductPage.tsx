import DriveEmbedPage from "./DriveEmbedPage";
import { DRIVE_DOCS } from "../data/driveDocs";

export default function CodeOfConductPage() {
  return (
    <DriveEmbedPage
      title="Code of Conduct"
      description="Review the official West Sacramento Soccer Club Competitive Program code of conduct."
      docId={DRIVE_DOCS.codeOfConduct.id}
    />
  );
}
