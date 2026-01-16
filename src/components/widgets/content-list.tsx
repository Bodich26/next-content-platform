import { ContentItem } from "@/entities/ui/content-item";
import { IContent } from "@/types/type";

type Props = {
  contentData: IContent[];
};
export const ContentList = ({ contentData }: Props) => {
  return (
    <section className="flex flex-col gap-4">
      {contentData.length === 0 && (
        <p className="text-2xl text-center w-full text-gray-600">
          Публикаций не найдено!
        </p>
      )}
      {contentData.map((item) => (
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
};
