export interface IContent {
  id: string;
  title: string;
  excerpt: string;
  status: "draft" | "published";
  updatedAt: string;
  createdAt: string;
}

export type FetchMode = "public" | "admin";
