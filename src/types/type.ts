export interface IContent {
  id: string;
  title: string;
  excerpt: string;
  status: ContentStatus;
  updatedAt: string;
  createdAt: string;
}

export type ContentStatus = "draft" | "published";
export type FetchMode = "public" | "admin";

export type FormState = Omit<IContent, "updatedAt" | "createdAt">;
