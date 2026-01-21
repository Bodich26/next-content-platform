import { fetchContent } from "@/entities/api/fetch-content";
import { ContentItem } from "@/entities/ui/content-item";

export default async function AdminPage() {
  const adminData = await fetchContent("admin");
  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-600">Лента публикаций</h1>
        <p className="text-gray-600">
          Актуальные материалы, обновляемые через админку
        </p>
      </header>
      <section className="flex flex-col gap-4">
        {adminData.length === 0 && (
          <p className="text-2xl text-center w-full text-gray-600">
            Публикаций не найдено!
          </p>
        )}
        {adminData.map((item) => (
          <ContentItem key={item.id} contentItem={item} isAdmin={true} />
        ))}
      </section>
    </>
  );
}
