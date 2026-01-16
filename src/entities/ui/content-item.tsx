type Props = {
  title: string;
  excerpt: string;
  status: "draft" | "published";
  updatedAt: string;
};

export const ContentItem = ({ title, excerpt, status, updatedAt }: Props) => {
  return (
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
  );
};
