type DriveDoc = {
  id: string;
  title: string;
};

export const DRIVE_DOCS = {
  codeOfConduct: {
    id: "1ZvbxtMMJB69C4lVJxDxzOjEOl8jHr9sk",
    title: "Code of Conduct",
  },
  fields: {
    id: "1jyS2XDomgcSV31LLI8oOo4Nx8KWrQ1FC",
    title: "Fields",
  },
  bylaws: {
    id: "1iosbNRhPEJ_-t_dN1ndJacM6d26CTNfE",
    title: "Bylaws",
  },
} satisfies Record<string, DriveDoc>;

export function buildDrivePreviewUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

export function buildDriveViewUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/view`;
}
