import { fetchContent } from "@/entities/api/fetch-content";
import { ContentItem } from "@/entities/ui/content-item";

export async function ContentList() {
  const contentData = await fetchContent("public");
  const publishContent = contentData.filter(
    (item) => item.status === "published",
  );

  return (
    <section className="flex flex-col gap-4">
      {publishContent.length === 0 && (
        <p className="text-2xl text-center w-full text-gray-600">
          Публикаций не найдено!
        </p>
      )}
      {publishContent.map((item) => (
        <ContentItem
          key={item.id}
          title={item.title}
          excerpt={item.excerpt}
          status={item.status}
          updatedAt={item.updatedAt}
          id={item.id}
        />
      ))}
    </section>
  );
}
