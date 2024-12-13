// awaited API response
export type JobItem = {
  id: number;
  badgeLetters: string;
  title: string;
  company: string;
  date: string;
  daysAgo: number;
  relevanceScore: number;
};

// awaited more detailed API response
export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};

export type SortBy = "relevant" | "recent";

export type Direction = "next" | "previous";
