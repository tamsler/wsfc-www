export type BoardMember = {
  role: string;
  name: string;
};

export const boardMembers: BoardMember[] = [
  { role: "President", name: "Richard Novoa" },
  { role: "Vice President", name: "Guillermo Villegas, Jr." },
  { role: "Secretary", name: "Yolanda Villegas" },
  { role: "Treasurer", name: "My Huynh" },
  { role: "Registrar", name: "Cristina Lopez" },
] satisfies BoardMember[];

export const technicalStaff: BoardMember[] = [
  { role: "Director of Coaching", name: "Thomas Amsler" },
] satisfies BoardMember[];
