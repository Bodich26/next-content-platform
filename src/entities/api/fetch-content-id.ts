import { FetchMode, IContent } from "@/types/type";
import { API_ROUTES, BASE_MOCK_API } from "../../../routes";
import { notFound } from "next/navigation";

export const fetchContentId = async (
  id: string,
  mode: FetchMode,
): Promise<IContent> => {
  const URL = `${BASE_MOCK_API}/${API_ROUTES.CONTENT}/${id}`;
  const fetchOptions =
    mode === "admin"
      ? { cache: "no-store" as const }
      : {
          cache: "force-cache" as const,
          next: {
            revalidate: 60,
            tags: [`content-${id}`],
          },
        };

  const res = await fetch(URL, fetchOptions);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const content = (await res.json()) as IContent;
  return content;
};
