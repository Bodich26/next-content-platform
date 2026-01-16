import { fetchContent } from "@/entities/api/fetch-content";
import { ContentItem } from "@/entities/ui/content-item";

export default async function Home() {
  const contentData = await fetchContent();
  console.log(contentData);

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
        <section className="flex flex-col gap-4">
          {contentData.map((item) => (
            <ContentItem
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              status={item.status}
              updatedAt={item.updatedAt}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
