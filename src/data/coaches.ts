export type Coach = {
  name: string;
  year: string;
  gender: "Girls" | "Boys";
  color: "Red" | "Blue";
};

export const coaches: Coach[] = [
  { name: "Brent Billings", year: "2016", gender: "Girls", color: "Red" },
  { name: "Loren Edgell", year: "2016", gender: "Boys", color: "Red" },
  { name: "Craig Fergason", year: "2016", gender: "Boys", color: "Blue" },
  { name: "Steve Macias", year: "2015", gender: "Girls", color: "Red" },
  { name: "Becky Unwin", year: "2014", gender: "Girls", color: "Red" },
  { name: "Dominique Forrester", year: "2014", gender: "Boys", color: "Red" },
  { name: "Greg Federico", year: "2014", gender: "Boys", color: "Blue" },
  { name: "Leodan Villasenor", year: "2013", gender: "Girls", color: "Red" },
  { name: "Memo Villegas Jr", year: "2013", gender: "Boys", color: "Red" },
  { name: "Guadalupe Garcia", year: "2012", gender: "Girls", color: "Red" },
  { name: "Jesse Melgoza", year: "2011", gender: "Boys", color: "Red" },
  { name: "Memo Villegas Sr", year: "2010", gender: "Boys", color: "Red" },
  { name: "Rico Novoa", year: "2007/2008", gender: "Boys", color: "Red" },
];
