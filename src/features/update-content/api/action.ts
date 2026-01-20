"use server";
import { FormState } from "@/types/type";
import { API_ROUTES, BASE_MOCK_API, PAGE_ROUTES } from "../../../../routes";
import { revalidatePath, updateTag } from "next/cache";

export async function updateContentAction(data: FormState) {
  const URL = `${BASE_MOCK_API}${API_ROUTES.CONTENT}/${data.id}`;
  try {
    const res = await fetch(URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        excerpt: data.excerpt,
        status: data.status,
        updatedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      throw new Error(`Не удалось обновить публикацию ${data.id}`);
    }

    updateTag("content");
    updateTag(`content-${data.id}`);
  } catch (error) {
    return console.error("Error updating content status:", error);
  }
}
