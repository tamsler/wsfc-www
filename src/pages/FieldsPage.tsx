import DriveEmbedPage from "./DriveEmbedPage";
import { DRIVE_DOCS } from "../data/driveDocs";

export default function FieldsPage() {
  return (
    <DriveEmbedPage
      title="Fields"
      description="Field information and documents for West Sacramento Soccer Club competitive program activities."
      docId={DRIVE_DOCS.fields.id}
    />
  );
}
