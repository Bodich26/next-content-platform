import { FetchMode, IContent } from "@/types/type";
import { API_ROUTES, BASE_MOCK_API } from "../../../routes";
import { notFound } from "next/navigation";

export const fetchContent = async (mode: FetchMode): Promise<IContent[]> => {
  const URL = `${BASE_MOCK_API}/${API_ROUTES.CONTENT}`;
  const fetchOptions =
    mode === "admin"
      ? { cache: "no-store" as const }
      : {
          cache: "force-cache" as const,
          next: {
            revalidate: 60,
            tags: ["content"],
          },
        };

  const res = await fetch(URL, fetchOptions);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const content = (await res.json()) as IContent;

  if (!Array.isArray(content)) {
    throw new Error("Некорректный формат ответа");
  }

  return content.map((item) => ({
    id: item.id,
    title: item.title,
    excerpt: item.excerpt,
    status: item.status,
    updatedAt: item.updatedAt,
    createdAt: item.createdAt,
  }));
};
