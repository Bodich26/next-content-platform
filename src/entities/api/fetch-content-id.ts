import { cache } from "react";
import { FetchMode, IContent } from "@/types/type";
import { API_ROUTES, BASE_MOCK_API } from "../../../routes";

export const fetchContentId = cache(
  async (id: string, mode: FetchMode): Promise<IContent> => {
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

    if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

    const content: IContent = await res.json();

    if (!content) {
      throw new Error("Объект не найден");
    }

    return content;
  },
);
