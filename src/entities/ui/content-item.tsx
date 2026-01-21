import Link from "next/link";
import { PAGE_ROUTES } from "../../../routes";
import Image from "next/image";
import { IContent } from "@/types/type";

type Props = {
  contentItem: IContent;
  isAdmin?: boolean;
};

export const ContentItem = ({ contentItem, isAdmin }: Props) => {
  const imageSrc = contentItem.image ?? "/fallback.jpg";
  return (
    <Link
      href={
        isAdmin
          ? `${PAGE_ROUTES.ADMIN}/${PAGE_ROUTES.CONTENT}/${contentItem.id}`
          : `${PAGE_ROUTES.CONTENT}/${contentItem.id}`
      }
    >
      <article className="flex flex-col gap-2 rounded border border-gray-300 p-4">
        <header className="flex items-center justify-between">
          <Image
            src={imageSrc}
            alt={contentItem.title}
            width={340}
            height={240}
            className="object-cover rounded"
            placeholder="blur"
            blurDataURL="/fallback.jpg"
          />
          <h3 className="text-lg font-semibold text-gray-600">
            {contentItem.title}
          </h3>

          <span className="text-sm text-gray-600">
            {contentItem.status === "published" ? "Опубликован" : "Черновик"}
          </span>
        </header>

        <p className="text-sm text-gray-600">{contentItem.excerpt}</p>

        <footer className="text-xs text-gray-600">
          Обновлено:
          {new Date(contentItem.updatedAt).toLocaleDateString("ru-RU")}
        </footer>
      </article>
    </Link>
  );
};
