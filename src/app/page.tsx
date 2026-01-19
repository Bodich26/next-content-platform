import { Suspense } from "react";
import { ContentItemSkeleton } from "@/components/shared";
import { ContentList } from "@/components/widgets";
import { fetchContent } from "@/entities/api/fetch-content";

export default async function Home() {
  const contentData = await fetchContent();
  const publishContent = contentData.filter(
    (item) => item.status === "published"
  );

  return (
    <div className="min-h-screen bg-zinc-100">
      <main className="mx-auto max-w-4xl px-4 py-10 flex flex-col gap-8">
        {/* Заголовок страницы */}
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-gray-600">Лента публикаций</h1>
          <p className="text-gray-600">
            Актуальные материалы, обновляемые через админку
          </p>
        </header>

        {/* Список контента */}
        <Suspense fallback={<ContentItemSkeleton />}>
          <ContentList contentData={publishContent} />
        </Suspense>
      </main>
    </div>
  );
}
