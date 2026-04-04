type DriveDoc = {
  id: string;
  title: string;
};

export const DRIVE_DOCS = {
  codeOfConduct: {
    id: "17DjhUhomMCUxk3U0p3zsMmxdLlcfYCMf",
    title: "Code of Conduct",
  },
  fields: {
    id: "1Wn3mzJJpefclEU0DVCNCGP08R6tar474",
    title: "Fields",
  },
} satisfies Record<string, DriveDoc>;

export function buildDrivePreviewUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

export function buildDriveViewUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/view`;
}
