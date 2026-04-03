type DriveDoc = {
  id: string;
  title: string;
};

export const DRIVE_DOCS = {
  codeOfConduct: {
    id: "1_z_H80D6WsOsUS5Q6-h8V5aTqeo91Lpw",
    title: "Code of Conduct",
  },
  fields: {
    id: "19iKqUGmR3L7YYvi4-VX5J9nkOzXYq_vh",
    title: "Fields",
  },
} satisfies Record<string, DriveDoc>;

export function buildDrivePreviewUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

export function buildDriveViewUrl(id: string) {
  return `https://drive.google.com/file/d/${id}/view`;
}
