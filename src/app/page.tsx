import { Suspense } from "react";
import { ContentItemSkeleton } from "@/components/shared";
import { ContentList } from "@/components/widgets";

export default function Home() {
  return (
    <>
      {/* Заголовок страницы */}
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-600">Лента публикаций</h1>
        <p className="text-gray-600">
          Актуальные материалы, обновляемые через админку
        </p>
      </header>

      {/* Список контента */}
      <Suspense fallback={<ContentItemSkeleton />}>
        <ContentList />
      </Suspense>
    </>
  );
}
