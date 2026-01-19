import Link from "next/link";
import { PAGE_ROUTES } from "../../../routes";

type Props = {
  id: string;
  title: string;
  excerpt: string;
  status: "draft" | "published";
  updatedAt: string;
  isAdmin?: boolean;
};

export const ContentItem = ({
  title,
  excerpt,
  status,
  updatedAt,
  id,
  isAdmin,
}: Props) => {
  return (
    <Link
      href={
        isAdmin
          ? `${PAGE_ROUTES.ADMIN}/${PAGE_ROUTES.CONTENT}/${id}`
          : `${PAGE_ROUTES.CONTENT}/${id}`
      }
    >
      <article className="flex flex-col gap-2 rounded border border-gray-300 p-4">
        <header className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-600">{title}</h3>

          <span className="text-sm text-gray-600">
            {status === "published" ? "Опубликован" : "Черновик"}
          </span>
        </header>

        <p className="text-sm text-gray-600">{excerpt}</p>

        <footer className="text-xs text-gray-600">
          Обновлено: {new Date(updatedAt).toLocaleDateString("ru-RU")}
        </footer>
      </article>
    </Link>
  );
};
