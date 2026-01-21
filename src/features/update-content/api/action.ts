"use server";
import { FormState, UpdateContentResult } from "@/types/type";
import { API_ROUTES, BASE_MOCK_API } from "../../../../routes";
import { updateTag } from "next/cache";

export async function updateContentAction(
  data: FormState,
): Promise<UpdateContentResult> {
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
      return { success: false, error: "Failed to update content" };
    }

    updateTag("content");
    updateTag(`content-${data.id}`);

    return { success: true };
  } catch {
    return { success: false, error: "Unexpected server error" };
  }
}
