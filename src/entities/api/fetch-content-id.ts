import { cache } from "react";
import { IContent } from "@/types/type";
import { API_ROUTES, BASE_MOCK_API } from "../../../routes";

export const fetchContentId = cache(async (id: string): Promise<IContent> => {
  const URL = `${BASE_MOCK_API}/${API_ROUTES.CONTENT}/${id}`;
  const res = await fetch(URL, {
    cache: "force-cache",
    next: {
      revalidate: 60,
      tags: [`content-${id}`],
    },
  });

  if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

  const content: IContent = await res.json();

  if (!content) {
    throw new Error("Объект не найден");
  }

  return content;
});
